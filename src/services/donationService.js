import clientPromise from '@/lib/mongodb';

export async function createDonation(donationData) {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    const donation = {
      ...donationData,
      createdAt: new Date(),
      status: 'pending'
    };

    const result = await db.collection('donations').insertOne(donation);
    console.log("Created donation:", result);
    return result;
  } catch (error) {
    console.error('Database connection error in createDonation:', error.message);
    throw error;
  }
}

export async function updateDonationByCheckoutId(checkoutRequestId, updateData) {
  console.log("Updating donation:", { checkoutRequestId, updateData });
  
  try {
    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection('donations').updateOne(
      { checkoutRequestId },
      { $set: updateData }
    );
    console.log("Update result:", result);
    return result;
  } catch (error) {
    console.error("Database connection error in updateDonationByCheckoutId:", error.message);
    throw error;
  }
}

export async function getDonationByCheckoutId(checkoutRequestId) {
  console.log("Getting donation by checkoutRequestId:", checkoutRequestId);
  
  try {
    const client = await clientPromise;
    const db = client.db();

    const donation = await db.collection('donations').findOne({ checkoutRequestId });
    console.log("Found donation:", donation);
    return donation;
  } catch (error) {
    console.error("Database connection error in getDonationByCheckoutId:", error.message);
    throw error;
  }
}

export async function getAllDonations(limit = 10, page = 1) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const skip = (page - 1) * limit;
    
    const donations = await db.collection('donations')
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await db.collection('donations').countDocuments();
    
    return {
      donations,
      total,
      pages: Math.ceil(total / limit),
      currentPage: page
    };
  } catch (error) {
    console.error("Database connection error in getAllDonations:", error.message);
    // Return empty result for build process
    return {
      donations: [],
      total: 0,
      pages: 0,
      currentPage: page
    };
  }
}

export async function getDonationStats() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const stats = await db.collection('donations').aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
          totalDonations: { $sum: 1 },
          averageDonation: { $avg: '$amount' }
        }
      }
    ]).toArray();

    return stats[0] || {
      totalAmount: 0,
      totalDonations: 0,
      averageDonation: 0
    };
  } catch (error) {
    console.error("Database connection error in getDonationStats:", error.message);
    // Return default stats for build process
    return {
      totalAmount: 0,
      totalDonations: 0,
      averageDonation: 0
    };
  }
} 