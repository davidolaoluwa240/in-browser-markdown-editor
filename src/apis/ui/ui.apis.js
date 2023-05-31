// Firebase
import {
  getDoc,
  serverTimestamp,
  updateDoc,
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
  return await addUiSettings(DEFAULT_UI_SETTINGS_ITEM);
});

/**
 * Add New Ui Settings
 * @param {Object} settings
 */
export const addUiSettings = catchAsync(async (settings) => {
  // 1). Get Auth User Uid
  const { uid } = auth.currentUser;

  // 2). Ui Doc Ref
  const uiRef = doc(uiCollectionRef, uid);

  // 3). Perform Adding Ui Setting
  await setDoc(uiRef, {
    ...settings,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  // 4). Get Ui Setting
  const uiSetting = await fetchUiSettings();

  // 5). Return Ui Setting
  return uiSetting;
});

/**
 * Update Ui Settings
 * @param {Object} updatedSettings
 */
export const updateUiSettings = catchAsync(async (updatedSettings) => {
  // 1). Get Ui Settings Id And CreatedAt Date
  const { id, createdAt } = updatedSettings;

  // 2). Ui Doc Ref
  const uiRef = doc(uiCollectionRef, id);

  // 3). Perform updating Ui Setting
  await updateDoc(uiRef, {
    ...updatedSettings,
    createdAt: Timestamp.fromDate(new Date(createdAt)),
    updatedAt: serverTimestamp(),
  });

  // 4). Get Ui Setting
  const uiSetting = await fetchUiSettings();

  // 5). Return Ui Setting
  return uiSetting;
});

/**
 * Fetch User Ui Settings
 */
export const fetchUiSettings = catchAsync(async () => {
  // 1). Get Auth User Uid
  const { uid } = auth.currentUser;

  // 2). Ui Doc Ref
  const uiDocRef = doc(uiCollectionRef, uid);

  // 3). Get Ui Doc
  const uiSettingSnapshot = await getDoc(uiDocRef);

  // 4). If UiSetting Document Does Not Exist Then Return Null
  if (!uiSettingSnapshot.exists()) return null;

  // 5). Return Ui Setting Document
  return dataFromSnapshot(uiSettingSnapshot);
});
