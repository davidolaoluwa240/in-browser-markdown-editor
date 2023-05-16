/**
 * Get Data From Firebase Snapshot
 * @param {Object} snapshot Firebase snapshot
 */
export const dataFromSnapshot = (snapshot) => {
  // Get Data From Snapshot
  const data = {
    ...snapshot.data(),
    id: snapshot.id,
  };

  // Convert CreatedAt Field To Date String
  if (data.createdAt) data.createdAt = data.createdAt.toDate().toISOString();

  // Convert UpdatedAt Field To Date String
  if (data.updatedAt) data.updatedAt = data.updatedAt.toDate().toISOString();

  //  Return Data
  return data;
};

/**
 * Return Collection Of Data From Firebase Query Snapshot
 * @param {Object} querySnapshot Firebase querysnapshot
 */
export const firebaseLooper = (querySnapshot) => {
  return querySnapshot.docs.map(dataFromSnapshot);
};
