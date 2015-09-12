# Installation:

## install nvm (Apple and Linux only).

### Apple:
```
brew install nvm
git clone git@github.com:gaeron/react-transform-boilerplate.git
cd react-transform-boilerplate
```

### Linux:
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
echo ". ~/.nvm/nvm.sh >> ~/.bashrc		#optional but recommended
```
## install node
```
nvm install		# latest version of node
nvm --version		# check what version of node you are using
nvm use v0.26.1		# if you have multiple versions of node installed you can choose
			# which versio to use by doing nvm use
```

## Install React

```
git clone git@github.com:gaearon/react-transform-boilerplate.git
cd react-transform-boilerplate
npm install
npm start
```

Now open `http://localhost:3000` to see the example react app running

## Install Wellness client
```
git clone git@github.com:NeverGoStable/wellness-client.git
cd wellness-client
npm install
npm run web
```
As long as `npm install` finishes you can safely ignore any error or warning messages about
optional dependencies not being installed

Open `index.html` in your browser
