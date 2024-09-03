# WhatsApp Clone

## Product Introduction
WhatsApp Clone is a project aiming to clone WhatsApp. It has powerful chat and high-quality audio and video calling functions. It uses Tencent's [Chat UIkit](https://trtc.io/products/chat) and [CallKit](https://trtc.io/products/call) components to achieve a smooth chat experience and stable and clear audio and video calls. The project focuses on user data security and can be used across platforms, bringing users a convenient, efficient and safe instant messaging experience.


## Run through WhatsApp Clone
### Step 1. Create an App
1. Log in to the [Chat Console](https://console.trtc.io).

 >If you already have an app, record its SDKAppID and go to **step 2**.
 
2. On the **Application List** page, click **Create Application**.
3. Activate the Call and Chat functions of the newly created application. 
4. In the **Create Application** dialog box, enter the app information and click **Confirm**.
 After the app is created, an app ID (SDKAppID) will be automatically generated, which should be noted down.

### Step 2: Obtain Key Information

1. Click **Application Configuration** in the row of the target app to enter the app details page.
2. Click **View Key** and copy and save the key information.
 > Please store the key information properly to prevent leakage.


### Step 3: Configure

1. Configure the user info for login.

	Open `WhatsAppClone/Private/GenerateTestUserSig.h`, and specify the `public_SDKAPPID`, `userid`, and `public_SECRETKEY` obtained and generated in the previous step.

2. Execute `pod install` on the command line to download dependencies.

### Step 4: Compile and Run

Open the `WhatsAppClone.xcworkspace` Xcode project, compile and run.

