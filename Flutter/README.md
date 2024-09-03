# WhatsApp Clone

## Product Introduction
WhatsApp Clone is a project aiming to clone WhatsApp. It has powerful chat and high-quality audio and video calling functions. It uses Tencent's [Chat UIkit](https://trtc.io/products/chat) and [CallKit](https://trtc.io/products/call) components to achieve a smooth chat experience and stable and clear audio and video calls. The project focuses on user data security and can be used across platforms, bringing users a convenient, efficient and safe instant messaging experience.


The platforms are compatible with the deployment of  WhatsApp Clone.

- Android
- iOS
- Windows
- macOS

## Environment Requirements

|   | Version                                                                        |
|---------|--------------------------------------------------------------------------------|
| Flutter | Flutter 3.16.0 or later                                                        |
| Android | Android Studio 3.5 or later; devices with Android 4.1 or later for apps        |
| iOS | Xcode 11.0 or later. Ensure that your project has a valid developer signature. |


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

Configure the user info for login.

Open `lib/config.dart`, and specify the `sdkappid`, `userid`, and `usersig` obtained and generated in the previous step.


### Step 4: Compile and Run 

```shell
flutter run
```


## -------
If you have any questions or need further information, feel free to reach out us.

- [Telegram](https://t.me/+gvScYl0uQ3U4MTRl)
- [X (Twitter)](https://x.com/runlin_wang95)

