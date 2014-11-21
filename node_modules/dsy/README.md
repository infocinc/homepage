
====================================
2014-11-20 DSY 

DSY is a fork of KeystoneJS , a powerful new Node.js content management systems and web app framework.
DSY will progressive make changes to the KeystoneJS system to add features that we think are necessary for a lot of commercial websites: internationalisation, theme support, landing page creation from templates, payment system integration... 

=====================================

[KeystoneJS](http://keystonejs.com) is a powerful new Node.js content management system and web app framework built on [express](http://expressjs.com) and [mongoose](http://mongoosejs.com) that makes it easy to create sophisticated web sites and apps, and gives you a beautiful, auto-generated Admin UI.

To get started, check out [keystonejs.com](http://keystonejs.com)!

## About

Keystone gives you:
*	A simple way to create a dynamic web site or app with well-structured routes, templates and models
*	A beautiful Admin UI based on the database models you define
*	Enhanced `models` with additional field types and functionality, building on those natively supported by Mongoose
*	Out of the box session management and authentication
*	An updates framework for managing data updates or initialisation
*	Integration with Cloudinary for image uploading, storage and resizing
*	Integration with Mandrill for sending emails easily
*	Integration with Google Places for clever location fields
*	Integration with Embedly for powerful video and rich media embedding tools

... plus a lot of other tools and utilities to make creating complex web apps easier.

Use our [Yeoman Generator](https://github.com/keystonejs/generator-keystone) to get up and running with KeystoneJS quickly, then check out our getting started guide &amp; docs at [keystonejs.com/docs/getting-started](http://keystonejs.com/docs/getting-started).

We have a demo website at [demo.keystonejs.com](http://demo.keystonejs.com/) where you can play with the Keystone Admin UI, and you can [read the source](https://github.com/JedWatson/keystone-demo) to see how it was built.

If you have ideas or questions, get in touch on the [KeystoneJS Google Group](https://groups.google.com/d/forum/keystonejs) or tweet at [@KeystoneJS](https://twitter.com/KeystoneJS) on twitter.



### Documentation

The Keystone docs are hosted online at [keystonejs.com](http://keystonejs.com). If you are offline, or would like to contribute to the docs and preview your changes, you can serve them locally by running `node docs` within the `./docs` folder (you will also have to run `npm install` first. This will start the docs site on port 8080.


## Usage

**Check out the [KeystoneJS Documentation](http://keystonejs.com/docs) for a walk-through on how to use KeystoneJS.**


### Linking Keystone for Development and Testing

If you want to test or develop against the `master` branch of KeystoneJS (or against your own branch), rather than a published version on **npm**, you just need to check it out then use `npm link` to link it to your project. On Mac OS, this is done like this:

*	Checkout KeystoneJS locally, e.g. to `~/Development/KeystoneJS`
*	From the KeystoneJS directory, run `sudo npm link` (you will need to enter your system password)
*	From your project directory, e.g. `~/Development/MySite` (the one with your `package.json` file in it) run `npm link keystone`. This will create a link between `~/Development/MySite/node_modules/keystone` and `~/Development/KeystoneJS`.

Then `require('keystone')` normally in your app - the development copy will be used. Note that running `npm update` will ignore new versions of keystone that have been published.

To go back to using a published version of KeystoneJS from npm, from your project directory, run `npm unlink keystone` then `npm install`.

## License

(The MIT License)

Copyright (c) 2014 Jed Watson 


Modifications (c) 2014 Infocinc 


Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
