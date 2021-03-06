import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationService,
  withTheme,
  useTheme,
  Icon,
  Touchable,
} from '@apollosproject/ui-kit';
import { useApolloClient } from '@apollo/client';
import {
  createFeatureFeedTab,
  UserAvatarConnected,
  ConnectScreenConnected,
} from '@apollosproject/ui-connected';
import { checkOnboardingStatusAndNavigate } from '@apollosproject/ui-onboarding';

const HeaderLogo = () => {
  const theme = useTheme();
  return (
    <Icon
      name={theme.type === 'light' ? 'brand-icon-light' : 'brand-icon-dark'}
      size={theme.sizing.baseUnit * 3}
    />
  );
};

const ProfileButton = () => {
  const navigation = useNavigation();
  return (
    <Touchable
      onPress={() => {
        navigation.navigate('UserSettingsNavigator');
      }}
    >
      <View>
        <UserAvatarConnected size="xsmall" />
      </View>
    </Touchable>
  );
};

const SearchButton = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Touchable
      onPress={() => {
        navigation.navigate('Search');
      }}
    >
      <View>
        <Icon
          name="search"
          size={theme.sizing.baseUnit * 1.5}
          fill={
            theme.type === 'light'
              ? theme.colors.secondary
              : theme.colors.text.secondary
          }
        />
      </View>
    </Touchable>
  );
};

const tabBarIcon = (name) => {
  function TabBarIcon({ color }) {
    return <Icon name={name} fill={color} size={24} />;
  }
  TabBarIcon.propTypes = {
    color: PropTypes.string,
  };
  return TabBarIcon;
};

// we nest stack inside of tabs so we can use all the fancy native header features
const HomeTab = createFeatureFeedTab({
  screenOptions: {
    headerHideShadow: true,
    headerCenter: HeaderLogo,
    headerRight: SearchButton,
    headerLeft: ProfileButton,
    headerLargeTitle: false,
  },
  options: {
    headerTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerLargeTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerBackTitleStyle: {
      fontFamily: 'BebasNeue',
    },
  },
  tabName: 'Home',
  feedName: 'HOME',
});

const ReadTab = createFeatureFeedTab({
  options: {
    headerLeft: ProfileButton,
  },
  screenOptions: {
    headerTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerLargeTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerBackTitleStyle: {
      fontFamily: 'BebasNeue',
    },
  },
  tabName: 'Next Steps',
  feedName: 'READ',
});

const WatchTab = createFeatureFeedTab({
  options: {
    headerLeft: ProfileButton,
  },
  screenOptions: {
    headerTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerLargeTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerBackTitleStyle: {
      fontFamily: 'BebasNeue',
    },
  },
  tabName: 'Media',
  feedName: 'WATCH',
});

const PrayTab = createFeatureFeedTab({
  options: {
    headerLeft: ProfileButton,
  },
  screenOptions: {
    headerTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerLargeTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerBackTitleStyle: {
      fontFamily: 'BebasNeue',
    },
  },
  tabName: 'Give',
  feedName: 'PRAY',
});

const ConnectTab = createFeatureFeedTab({
  options: {
    headerLeft: ProfileButton,
  },
  screenOptions: {
    headerTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerLargeTitleStyle: {
      fontFamily: 'BebasNeue',
    },
    headerBackTitleStyle: {
      fontFamily: 'BebasNeue',
    },
  },
  tabName: 'Connect',
  feedName: 'CONNECT',
});

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
  const client = useApolloClient();
  // this is only used by the tab loaded first
  // if there is a new version of the onboarding flow,
  // we'll navigate there first to show new screens
  useEffect(() => {
    checkOnboardingStatusAndNavigate({
      client,
      navigation: NavigationService,
      navigateHome: false,
    });
  }, [client]);
  return (
    <Navigator lazy>
      <Screen
        name="Home"
        component={HomeTab}
        options={{ tabBarIcon: tabBarIcon('house-line') }}
      />
      <Screen
        name="Connect"
        component={ConnectTab}
        options={{ tabBarIcon: tabBarIcon('users') }}
      />
      <Screen
        // Read Tab
        name="Next Steps"
        component={ReadTab}
        options={{ tabBarIcon: tabBarIcon('trend-up') }}
      />
      <Screen
        // Watch Tab
        name="Media"
        component={WatchTab}
        options={{ tabBarIcon: tabBarIcon('youtube-logo') }}
      />
      <Screen
        // Give Tab
        name="Give"
        component={PrayTab}
        options={{ tabBarIcon: tabBarIcon('currency-circle-dollar') }}
      />
    </Navigator>
  );
};

export default TabNavigator;
