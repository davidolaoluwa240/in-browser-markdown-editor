// Firebase
import { getDoc, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { dataFromSnapshot, uiCollectionRef, auth } from "../../utils";

// Utils
import { catchAsync } from "../../utils";

/**
 * Add/Update New Ui Settings
 * @param {Object} settings
 */
export const addAndUiSettings = catchAsync(async (settings) => {
  // Get Auth User Uid
  const { uid } = auth.currentUser;

  // Ui Doc Ref
  const uiDocRef = doc(uiCollectionRef, uid);

  // Perform Adding/Updating Ui Doc
  await setDoc(
    uiDocRef,
    { ...settings, updatedAt: serverTimestamp() },
    { merge: true }
  );

  // Get Ui Setting
  const uiSetting = await fetchUiSettings();

  // Retur Ui Setting
  return uiSetting;
});

/**
 * Fetch Ui Settings
 */
export const fetchUiSettings = catchAsync(async () => {
  // Get Auth User Uid
  const { uid } = auth.currentUser;

  // Ui Doc Ref
  const uiDocRef = doc(uiCollectionRef, uid);

  // Get Ui Doc
  const uiSettingSnapshot = await getDoc(uiDocRef);

  //  Return Ui Setting Document
  return dataFromSnapshot(uiSettingSnapshot);
});
