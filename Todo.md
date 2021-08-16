// My component-library progress. 

I first intended to build reusable react applications as a library using nothing more than importing all components
into a single object that could be exported. Me being nieve, it not Shockingly ended in a disaster. Webpack simply cannot bundle
components this way and import to npm. 

My next step was bit.dev. This is a great tool for tracking components and publishing to their application as components which can]
be tagged to sit under a central collection or as individual components. This was great and solved my issue. however, Building components
means needing a workspace to edit and review the component being built. 

I also built a nice js script that took nodeJs cli command arguments in order to streamline the process of tracking/adding and uploading
components. This saved a bunch of time. 

However, 

to work on these components meant using the create-react-app and I didn't like the idea of manually changing what component currently being worked on should be rendered in the app. 

moreso, 
keeping the library of component within the same project as the package.json used to build react could possibly mean bit.dev also packages unsessary packages. I'm not expert with bit.dev so it could be that packages required for the components being tagged and commited only require what has been imported. Though this was a concern which made me rethink how I would build a library.


I did review the possibility of developing components individually within codesandbox and pushing new changes to Github. This way I could
pull any changes into my local workspace and do the bit process this way. The possibility of using bit in a codesandbox would have been
simpler, but for my knowledge, not possible since i'm sure codesandbox does not support a cli with global packages and auth. 


//

so my issue is working with bit.dev components in a nice-simple playground with the ability to document components and easily switch 
between the components being tested.

// my newest choices.

* building components with storybook, and distributing to npm using parcel or just keep as a git repo?.

* building with storybook and bit.dev
      - build the components in storybook which provides an interface and tag with bit.dev
      - https://blog.bitsrc.io/using-storybook-with-bit-71f368119fb provides an intersting observation that both should work indpendant of
        eachother. they work in parallel but given there's no support for storybook in bit; it makes it harder to upload storybook components.

* using the newest version of bit.dev called Harmony.
      - could be the fix to bit.dev and storybook. Harmony may offer a live coding playground for working on components.


// questions
- does uploading modules to bit.dev also upload every node_module within the app. or does it somehow package the only modules used 
  by that component?
