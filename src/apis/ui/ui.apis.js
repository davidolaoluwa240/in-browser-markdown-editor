// Firebase
import {
  getDoc,
  serverTimestamp,
  setDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { dataFromSnapshot, uiCollectionRef, auth } from "../../utils";

// Data
import { DEFAULT_UI_SETTINGS_ITEM } from "../../data";

// Utils
import { catchAsync } from "../../utils";

export const addDefaultUiSettings = catchAsync(async () => {
  return await addAndUpdateUiSettings(DEFAULT_UI_SETTINGS_ITEM);
});

/**
 * Add/Update New Ui Settings
 * @param {Object} settings
 */
export const addAndUpdateUiSettings = catchAsync(async (settings) => {
  // Get Auth User Uid
  const {
    uid,
    metadata: { creationTime },
  } = auth.currentUser;

  // Ui Doc Ref
  const uiDocRef = doc(uiCollectionRef, uid);

  // Perform Adding/Updating Ui Doc
  await setDoc(
    uiDocRef,
    {
      ...settings,
      createdAt: Timestamp.fromDate(new Date(creationTime)),
      updatedAt: serverTimestamp(),
    },
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

  if (!uiSettingSnapshot.exists()) return null;

  //  Return Ui Setting Document
  return dataFromSnapshot(uiSettingSnapshot);
});
