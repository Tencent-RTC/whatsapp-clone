# WhatsApp Clone

## Product Introduction
WhatsApp Clone is a project aiming to clone WhatsApp. It has powerful chat and high-quality audio and video calling functions. It uses Tencent's [Chat UIkit](https://trtc.io/products/chat) and [CallKit](https://trtc.io/products/call) components to achieve a smooth chat experience and stable and clear audio and video calls. The project focuses on user data security and can be used across platforms, bringing users a convenient, efficient and safe instant messaging experience.

## Run through WhatsApp Clone
### Step 1. Create an App
1. Log in to the [Chat Console](https://console.trtc.io).

 >If you already have an app, record its SDKAppID and go to **step 2**.
 
2. On the **Application List** page, click **Create Application**.
3. Activate the Call and Chat functions of the newly created application. 
4.  In the **Create Application** dialog box, enter the app information and click **Confirm**.
 After the app is created, an app ID (SDKAppID) will be automatically generated, which should be noted down.

### Step 2: Obtain Key Information

1. Click **Application Configuration** in the row of the target app to enter the app details page.
2. Click **View Key** and copy and save the key information.
 > Please store the key information properly to prevent leakage.

### Step 3: Configure

Set relevant parameters in the `app/src/main/java/com/tencent/qcloud/tim/demo/signature/GenerateTestUserSig.java` file:

 - SDKAPPID: set it to the SDKAppID obtained in **step 1**.
 - SECRETKEY: enter the actual key information obtained in **step 2**.

<img width="1576" alt="7db2b7abfe1018f0b2612d4c49f95ab3" src="https://user-images.githubusercontent.com/85340225/205882619-01f54454-2db1-42ab-80a7-a5cab98149ab.png">


> In this document, the method to obtain UserSig is to configure a SECRETKEY in the client code. In this method, the SECRETKEY is vulnerable to decompilation and reverse engineering. Once your SECRETKEY is leaked, attackers can steal your Tencent Cloud traffic. Therefore, **this method is only suitable for locally running the project and feature debugging**.
>The correct `UserSig` distribution method is to integrate the calculation code of `UserSig` into your server and provide an application-oriented API. When `UserSig` is needed, your app can send a request to the business server for a dynamic `UserSig`. For more information, please see [How do I calculate UserSig on the server?](https://www.tencentcloud.com/document/product/1047/34385?lang=en&pg=).

### Step 4: Compile and Run 
Import the project with Android Studio, and then compile and run it.

<img width="250" alt="GitHub_ConversationIncludeSearchMinimalist" src="https://user-images.githubusercontent.com/85340225/205879099-1577d68a-a6c2-4413-8ebe-6742f5e4aa7c.png"> <img width="250" alt="GitHub_ChatIncludeCallMinimalist" src="https://user-images.githubusercontent.com/85340225/205878435-75c56857-a8c5-4262-b0cf-71a7d773b50c.png"> <img width="250" alt="GitHub_ContactIncludeCallMinimalist" src="https://user-images.githubusercontent.com/85340225/205878892-218cb7a3-977a-4277-bda3-903360600742.png">

>In respect for the copyright of the emoji design, the Chat WhatsApp Clone project does not include the cutouts of large emoji elements. Please replace them with your own designed or copyrighted emoji packs before the official launch for commercial use. The default small yellow face emoji pack is copyrighted by Tencent Cloud and can be authorized for a fee. If you wish to obtain authorization, please [submit a ticket](https://console.tencentcloud.com/workorder/category?level1_id=29&level2_id=40&source=14&data_title=Chat&step=1) to contact us.
>
> <img src="https://qcloudimg.tencent-cloud.cn/image/document/6438e8feb7bba909511e0d798dfaf91d.png" width="300px" />

