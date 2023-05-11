/**
 * Get Data From Firebase Snapshot
 * @param {Object} snapshot Firebase snapshot
 */
export const dataFromSnapshot = (snapshot) => {
  // Get Data From Snapshot
  const data = {
    id: snapshot.id,
    ...snapshot.data(),
  };

  // Convert Created At Field To Date String
  if (data.createdAt) data.createdAt = data.createdAt.toDate().toISOString();

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
