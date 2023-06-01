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

/**
 * Add Default Ui Settings
 */
export const addDefaultUiSettings = catchAsync(async () => {
  return await addAndUpdateUiSettings(DEFAULT_UI_SETTINGS_ITEM);
});

/**
 * Add/Update Ui Settings
 * @param {Object} settings
 */
export const addAndUpdateUiSettings = catchAsync(async (settings) => {
  // 1). Get Auth User Uid/CreationTime
  const {
    uid,
    metadata: { creationTime },
  } = auth.currentUser;

  // 2). Ui Doc Ref
  const uiRef = doc(uiCollectionRef, uid);

  // 3). Perform Adding/Updating Ui Setting
  await setDoc(
    uiRef,
    {
      ...settings,
      createdAt: Timestamp.fromDate(new Date(creationTime)),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  // 4). Get Ui Setting
  const uiSetting = await fetchUiSettings();

  // 5). Return Ui Setting
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
