# Installation:

## install nvm (Apple and Linux only).

### OS X:
```bash
brew install nvm
```

### Linux:
```bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
echo ". ~/.nvm/nvm.sh >> ~/.bashrc		#optional but recommended
```

## Install Wellness client
```bash
git clone git@github.com:NeverGoStable/wellness-client.git
cd wellness-client
nvm use		# You may need to also run `nvm install`
npm install
npm run web	# If working on web
npm run ios	# If working on iOS (only on OS X)
```

As long as `npm install` finishes you can safely ignore any error or warning messages about
optional dependencies not being installed

If you're working on the web version, open `index.html` in you browser. If you're working on iOS, select the simulator or your iOS device from the targets menu and click run. Xcode should open automatically when running `npm run ios`. If for some reason it is not running but the webpack server is, open `iOS/WellnessDiary.xcodeproj`.
