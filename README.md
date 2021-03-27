# useFacebookSDK
> a react hook that loads facebook sdk

`hook size - 1.2kB`
--- 
For some reason facebook official docs don't provide a react example
as if the react team and the social login team dont like each other :)

This repo contains all you need to use facebook sdk in any react application.

---
## install
```npm
# put this in .npmrc ( either global or in a repository root ) 
@viggin543:registry=https://npm.pkg.github.com
```
```npm
# run 
npm install @viggin543/use-facebook-sdk@1.0.1
```

Then in a react component:

```javascript
// make sure this is mounted only once
// else every time react monnt it facebook sdk will be fetched again
// and you dont want mayn instances of fb sdk in your app 
const SomeRootLevelComponnent = () => {
    const { fbSdkReady } =  useFacebookSdk('<your-fb-app-id>', 'v9.0', 'en_US')
    return fbSdkReady ? <p>sdk ready</p> : <p>sdk loading ...</p>
}
``` 
To test this works, open network tab and see call fo fetch facebook sdk was made 
![image](https://user-images.githubusercontent.com/6231756/112716279-71f65480-8ef6-11eb-8d33-3c5480e2d713.png)
