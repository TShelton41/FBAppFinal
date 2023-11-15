# This is the final code for React Native and adding Firebase

In order for you to run this project. npm install or yarn install

Expo Firebase Doc: https://docs.expo.dev/guides/using-firebase/

## Written Instructions for adding Firebase

<ol style="list-style-type: decimal;">
    <li>You will need to first create a project inside of Google's Firebase. <a href="https://firebase.google.com/" target="_blank" rel="noopener">https://firebase.google.com/</a><br />&bull; Note: Do not use your school email. If you can create a Gmail account.&nbsp;<br /><br /></li>
    <li>Go to the Dashboard of your Firebase account and click the Add Project button. Follow the directions. Accept the defaults if you want you can add analytics.&nbsp;<br /><br /></li>
    <li>Next, click on the authentication button in the left-hand menu, then click on sign-in method and make sure you enable email and password.<br /><br /></li>
    <li>Depending on the database, you want to use, click on build, and then either firestore or real-time database. We will be using firestore, so make sure you enable that and then set the permissions to test mode.&nbsp;<br /><br /></li>
    <li>Next go to this page, <a title="How to Create a React Native Project Locally" href="https://iu.instructure.com/courses/2183266/pages/how-to-create-a-react-native-project-locally" data-course-type="wikiPages" data-published="true" data-api-endpoint="https://iu.instructure.com/api/v1/courses/2183266/pages/how-to-create-a-react-native-project-locally" data-api-returntype="Page">How to Create a React Native Project Locally,</a> and create your local Expo project.&nbsp;<br /><br /></li>
    <li>After you create the project you will need to install the following packages.&nbsp;
        <ol style="list-style-type: decimal;">
            <li>npx expo install firebase<br />
                <pre>npx expo install firebase</pre>
            </li>
        </ol>
    </li>
    <li>Next copy your config file from your project at firebase.google.com. Something that looks like this.<br /><br />
        <pre>// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "",
authDomain: "",
databaseURL: "",
projectId: "",
storageBucket: "",
messagingSenderId: "",
appId: "",
measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);</pre>

</li>
<li>Now create a file in the root of your project called, firebaseConfig.js <br />and paste the code you copied from the firebase website into the file.&nbsp;<br /><br /></li>
<li>Next, you need to import auth from firebase/auth<br />
<pre>import { getAuth } from "firebase/auth";</pre>
</li>
<li>Now that you have auth imported, we need to export it so other components can use it. Place this at the bottom of the file under the const app.<br />
<pre>export const auth = getAuth(app);</pre>
</li>
<li>Now we need to bring in Firestore. Import Firestore and make it accessible.<br />
<pre>import { getFirestore } from "firebase/firestore";<br />// put the below line at the bottom of the file
export const firestore = getFirestore(app);</pre>
</li>
<li>Then run npx expo customize metro.config.js&nbsp;<br />
<pre>npx expo customize metro.config.js</pre>
</li>
<li>Then put this in the metro config file.&nbsp;
<pre class="css-1rxpilq" data-text="true"><code class="css-1r5zesl"><span class="token keyword">const</span> <span >{</span> getDefaultConfig <span >}</span> <span class="token operator">=</span> <span >require</span><span >(</span><span class="token string">'@expo/metro-config'</span><span >)</span><span >;</span>

<span class="token keyword">const</span> defaultConfig <span class="token operator">=</span> <span >getDefaultConfig</span><span >(</span>\_\_dirname<span >)</span><span >;</span>
defaultConfig<span >.</span><span >resolver</span><span >.</span><span >sourceExts</span><span >.</span><span class="token method function property-access">push</span><span >(</span><span class="token string">'cjs'</span><span >)</span><span >;</span>

module<span >.</span><span >exports</span> <span class="token operator">=</span> defaultConfig<span >;</span></code></pre>

</li>
<li>Next, you can either run either of the following commands to run on a simulator.<br />
<pre>yarn ios
yarn android
yarn web</pre>
</li>

</ol>
<p><strong>Adding a Navigation Stack to your project</strong></p>
<ol style="list-style-type: decimal;">
    <ol style="list-style-type: decimal;">
        <ol style="list-style-type: decimal;">
            <li>Add @react-navigation/native<br />
                <pre>@react-navigation/native</pre>
            </li>
            <li>Add @react-navigation/native-stack<br />
                <pre>yarn add @react-navigation/native-stack</pre>
            </li>
        </ol>
    </ol>
</ol>
<p>&nbsp;</p>
<p>&nbsp;</p>
