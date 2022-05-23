import ApollosConfig from '@apollosproject/config';
import Svg, { Path } from 'react-native-svg';
import FRAGMENTS from '@apollosproject/ui-fragments';
import { makeIcon } from '@apollosproject/ui-kit';
import { Intro } from '@apollosproject/ui-onboarding/src/LandingSwiper/slides';
import { Appearance, Dimensions } from 'react-native';

const deviceColorScheme = Appearance.getColorScheme();
const screen = Dimensions.get('screen');

const THEME = {
  colors: {
    primary: deviceColorScheme === 'light' ? '#1A162A' : '#504582',
    secondary: '#FC4646',
    tertiary: '#222198',
  },
  typography: {
    sans: {
      black: {
        default: 'BebasNeue',
      },
    },
  },
  overrides: {
    'ui-kit.Button': (theme) => ({
      // Fixes an issue on Android where transparency do not look good
      // This forces all buttons to be filled with colors.secondary
      bordered: false,
    }),
    'ui-onboarding.LandingSwiper.slides.Intro': {
      appIconSize: 200,
      greeting: 'Welcome to the OCBF App!',
      subtitle: 'Be the church,\nmake an impact.',
      listItems:
        screen.height >= 800
          ? [
              { text: 'Grow in scripture.', icon: 'book-open' },
              { text: 'Pray with each other.', icon: 'heart' },
              { text: 'Be in community.', icon: 'users' },
            ]
          : [],
    },
    'ui-onboarding.LandingSwiper': {
      // Only show the Intro slide
      slides: [() => Intro],
    },
    'ui-onboarding.LandingSwiper.PhoneOutline': {
      // Removes the phone mask
      children: () => null,
      // Hides the phone outline
      fill: '#00000000',
    },
    'ui-onboarding.LandingSwiper.LandingSlide.ChildrenContainer': {
      flex: 1,
    },
  },
};

const ICONS = {
  BrandIcon: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg width={size} height={size} viewBox="0 0 456 163" {...otherProps}>
      <Path
        d="M255.952 144.505C260.909 145.199 267.553 145.429 276.123 145.429C300.973 145.429 323.896 137.783 323.896 115.075C323.896 93.9707 302.087 84.9253 275.833 84.9253H255.952V144.505ZM255.952 69.8547H277.755C302.9 69.8547 317.823 58.4987 317.823 43.436C317.823 25.3414 301.529 17.9334 277.203 17.9334C266.157 17.9334 259.816 18.62 255.952 19.316V69.8547ZM231.921 5.872C242.425 3.784 259.261 2.40133 275.833 2.40133C299.86 2.40133 315.341 5.87201 326.655 13.7533C336.331 19.7867 342.411 29.052 342.411 41.352C342.411 56.6533 330.252 69.8547 310.921 75.6493V76.3547C328.596 79.8294 349.316 92.1133 349.316 115.301C349.316 128.749 342.961 138.947 333.279 146.589C320.595 156.566 299.599 161.194 269.207 161.194C252.632 161.194 239.921 160.27 231.921 159.345V5.872"
        fill={fill}
      />
      <Path
        d="M255.952 144.505C260.909 145.199 267.548 145.429 276.123 145.429C300.973 145.429 323.896 137.783 323.896 115.075C323.896 93.9707 302.08 84.9253 275.833 84.9253H255.952V144.505ZM255.952 69.8547H277.767C302.907 69.8547 317.823 58.4987 317.823 43.436C317.823 25.3414 301.529 17.9334 277.203 17.9334C266.167 17.9334 259.816 18.62 255.952 19.316V69.8547ZM231.921 5.872C242.425 3.784 259.279 2.40133 275.833 2.40133C299.86 2.40133 315.341 5.87201 326.655 13.7533C336.331 19.7867 342.411 29.052 342.411 41.352C342.411 56.6533 330.252 69.8547 310.921 75.6493V76.3547C328.596 79.8294 349.316 92.1133 349.316 115.301C349.316 128.749 342.961 138.947 333.279 146.589C320.595 156.566 299.599 161.194 269.207 161.194C252.632 161.194 239.921 160.27 231.921 159.345V5.872"
        fill={fill}
      />
      <Path
        d="M84.8016 145.892C122.915 145.892 144.467 116.452 144.467 80.988C144.467 49.924 125.125 17.46 85.076 17.46C45.0235 17.46 25.1297 48.764 25.1297 82.6067C25.1297 115.528 46.6672 145.892 84.5125 145.892H84.8016ZM83.6917 162.365C34.2391 162.365 0 130.359 0 83.0773C0 33.4667 36.4661 0.998675 86.1677 0.998675C137.28 0.998675 170.143 33.6934 170.143 80.06C170.143 133.619 131.2 162.365 83.9724 162.365H83.6917"
        fill={fill}
      />
      <Path
        d="M84.8016 145.892C122.915 145.892 144.467 116.452 144.467 80.988C144.467 49.924 125.125 17.46 85.076 17.46C45.0235 17.46 25.1297 48.764 25.1297 82.6067C25.1297 115.528 46.6672 145.892 84.5125 145.892H84.8016ZM83.6917 162.365C34.2391 162.365 0 130.359 0 83.0773C0 33.4667 36.4661 0.998675 86.1677 0.998675C137.28 0.998675 170.143 33.6934 170.143 80.06C170.143 133.619 131.2 162.365 83.9724 162.365H83.6917"
        fill={fill}
      />
      <Path
        d="M223.74 154.953C215.184 158.655 197.225 162.365 174.584 162.365C122.082 162.365 82.8683 134.536 82.8683 83.0773C82.8683 33.9253 122.378 0.998675 180.099 0.998675C203.031 0.998675 217.933 5.17869 224.305 7.96002L218.223 24.4294C209.392 20.716 196.392 17.9334 180.925 17.9334C137.28 17.9334 108.289 41.352 108.289 82.38C108.289 120.86 134.519 145.199 179.555 145.199C194.456 145.199 209.392 142.652 219.055 138.716L223.74 154.953"
        fill={fill}
      />
      <Path
        d="M223.74 154.953C215.184 158.655 197.225 162.365 174.584 162.365C122.082 162.365 82.8683 134.536 82.8683 83.0773C82.8683 33.9253 122.378 0.998675 180.099 0.998675C203.031 0.998675 217.933 5.17869 224.305 7.96002L218.223 24.4294C209.392 20.716 196.392 17.9334 180.925 17.9334C137.28 17.9334 108.289 41.352 108.289 82.38C108.289 120.86 134.519 145.199 179.547 145.199C194.467 145.199 209.392 142.652 219.055 138.716L223.74 154.953"
        fill={fill}
      />
      <Path
        d="M355.223 3.56137H455.488V20.484H379.533V72.4133H449.704V89.0813H379.533V159.815H355.223V3.56137Z"
        fill={fill}
      />
      <Path
        d="M355.223 3.56137H455.495V20.484H379.533V72.4133H449.695V89.0813H379.533V159.815H355.223V3.56137Z"
        fill={fill}
      />
      <Path
        d="M300.897 123.697C299.981 122.701 295.087 117.469 295.087 117.469L266.433 98.72H265.876C257.32 98.72 250.451 97.3933 244.391 96.2187C239.213 95.2293 234.355 94.2973 229.211 94.2973C222.157 94.2973 217.768 97.736 215.469 100.952C213.148 97.736 208.768 94.2973 201.701 94.2973C196.579 94.2973 191.7 95.2293 186.533 96.2187C180.479 97.3933 173.607 98.72 165.041 98.72H164.487L135.825 117.469C135.825 117.469 130.951 122.701 130.024 123.697C129.036 123.697 124.29 123.697 124.29 123.697L127.829 131.723H303.089L306.649 123.697C306.649 123.697 301.895 123.697 300.897 123.697Z"
        fill="#FC4646"
      />
      <Path
        d="M301.872 129.853L303.759 125.571H127.163L129.048 129.853H301.872Z"
        fill="#FC4646"
      />
      <Path
        d="M293.869 118.928C269.041 118.928 253.868 112.025 236.843 112.025C219.836 112.025 215.469 125.571 215.469 125.571H300.085L293.869 118.928ZM194.079 112.025C177.064 112.025 161.887 118.928 137.043 118.928L130.853 125.571H215.469C215.469 125.571 211.093 112.025 194.079 112.025"
        fill="#FC4646"
      />
      <Path
        d="M137.043 118.928C161.887 118.928 177.064 112.025 194.079 112.025C211.093 112.025 215.469 125.571 215.469 125.571V104.873C215.469 104.873 212.66 96.1547 201.701 96.1547C190.773 96.1547 181.011 100.593 165.041 100.593L137.043 118.928"
        fill={fill}
      />
      <Path
        d="M293.869 118.928C269.041 118.928 253.868 112.025 236.843 112.025C219.836 112.025 215.469 125.571 215.469 125.571V104.873C215.469 104.873 218.271 96.1547 229.211 96.1547C240.152 96.1547 249.909 100.593 265.876 100.593L293.869 118.928"
        fill={fill}
      />
    </Svg>
  )),
  BrandIconDark: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg width={size} height={size} viewBox="0 0 456 163" {...otherProps}>
      <Path
        d="M255.952 144.505C260.909 145.199 267.553 145.429 276.123 145.429C300.973 145.429 323.896 137.783 323.896 115.075C323.896 93.9707 302.087 84.9253 275.833 84.9253H255.952V144.505ZM255.952 69.8547H277.755C302.9 69.8547 317.823 58.4987 317.823 43.436C317.823 25.3414 301.529 17.9334 277.203 17.9334C266.157 17.9334 259.816 18.62 255.952 19.316V69.8547ZM231.921 5.872C242.425 3.784 259.261 2.40133 275.833 2.40133C299.86 2.40133 315.341 5.87201 326.655 13.7533C336.331 19.7867 342.411 29.052 342.411 41.352C342.411 56.6533 330.252 69.8547 310.921 75.6493V76.3547C328.596 79.8294 349.316 92.1133 349.316 115.301C349.316 128.749 342.961 138.947 333.279 146.589C320.595 156.566 299.599 161.194 269.207 161.194C252.632 161.194 239.921 160.27 231.921 159.345V5.872"
        fill="#FFFFFF"
      />
      <Path
        d="M255.952 144.505C260.909 145.199 267.548 145.429 276.123 145.429C300.973 145.429 323.896 137.783 323.896 115.075C323.896 93.9707 302.08 84.9253 275.833 84.9253H255.952V144.505ZM255.952 69.8547H277.767C302.907 69.8547 317.823 58.4987 317.823 43.436C317.823 25.3414 301.529 17.9334 277.203 17.9334C266.167 17.9334 259.816 18.62 255.952 19.316V69.8547ZM231.921 5.872C242.425 3.784 259.279 2.40133 275.833 2.40133C299.86 2.40133 315.341 5.87201 326.655 13.7533C336.331 19.7867 342.411 29.052 342.411 41.352C342.411 56.6533 330.252 69.8547 310.921 75.6493V76.3547C328.596 79.8294 349.316 92.1133 349.316 115.301C349.316 128.749 342.961 138.947 333.279 146.589C320.595 156.566 299.599 161.194 269.207 161.194C252.632 161.194 239.921 160.27 231.921 159.345V5.872"
        fill="#FFFFFF"
      />
      <Path
        d="M84.8016 145.892C122.915 145.892 144.467 116.452 144.467 80.988C144.467 49.924 125.125 17.46 85.076 17.46C45.0235 17.46 25.1297 48.764 25.1297 82.6067C25.1297 115.528 46.6672 145.892 84.5125 145.892H84.8016ZM83.6917 162.365C34.2391 162.365 0 130.359 0 83.0773C0 33.4667 36.4661 0.998675 86.1677 0.998675C137.28 0.998675 170.143 33.6934 170.143 80.06C170.143 133.619 131.2 162.365 83.9724 162.365H83.6917"
        fill="#FFFFFF"
      />
      <Path
        d="M84.8016 145.892C122.915 145.892 144.467 116.452 144.467 80.988C144.467 49.924 125.125 17.46 85.076 17.46C45.0235 17.46 25.1297 48.764 25.1297 82.6067C25.1297 115.528 46.6672 145.892 84.5125 145.892H84.8016ZM83.6917 162.365C34.2391 162.365 0 130.359 0 83.0773C0 33.4667 36.4661 0.998675 86.1677 0.998675C137.28 0.998675 170.143 33.6934 170.143 80.06C170.143 133.619 131.2 162.365 83.9724 162.365H83.6917"
        fill="#FFFFFF"
      />
      <Path
        d="M223.74 154.953C215.184 158.655 197.225 162.365 174.584 162.365C122.082 162.365 82.8683 134.536 82.8683 83.0773C82.8683 33.9253 122.378 0.998675 180.099 0.998675C203.031 0.998675 217.933 5.17869 224.305 7.96002L218.223 24.4294C209.392 20.716 196.392 17.9334 180.925 17.9334C137.28 17.9334 108.289 41.352 108.289 82.38C108.289 120.86 134.519 145.199 179.555 145.199C194.456 145.199 209.392 142.652 219.055 138.716L223.74 154.953"
        fill="#FFFFFF"
      />
      <Path
        d="M223.74 154.953C215.184 158.655 197.225 162.365 174.584 162.365C122.082 162.365 82.8683 134.536 82.8683 83.0773C82.8683 33.9253 122.378 0.998675 180.099 0.998675C203.031 0.998675 217.933 5.17869 224.305 7.96002L218.223 24.4294C209.392 20.716 196.392 17.9334 180.925 17.9334C137.28 17.9334 108.289 41.352 108.289 82.38C108.289 120.86 134.519 145.199 179.547 145.199C194.467 145.199 209.392 142.652 219.055 138.716L223.74 154.953"
        fill="#FFFFFF"
      />
      <Path
        d="M355.223 3.56137H455.488V20.484H379.533V72.4133H449.704V89.0813H379.533V159.815H355.223V3.56137Z"
        fill="#FFFFFF"
      />
      <Path
        d="M355.223 3.56137H455.495V20.484H379.533V72.4133H449.695V89.0813H379.533V159.815H355.223V3.56137Z"
        fill="#FFFFFF"
      />
      <Path
        d="M300.897 123.697C299.981 122.701 295.087 117.469 295.087 117.469L266.433 98.72H265.876C257.32 98.72 250.451 97.3933 244.391 96.2187C239.213 95.2293 234.355 94.2973 229.211 94.2973C222.157 94.2973 217.768 97.736 215.469 100.952C213.148 97.736 208.768 94.2973 201.701 94.2973C196.579 94.2973 191.7 95.2293 186.533 96.2187C180.479 97.3933 173.607 98.72 165.041 98.72H164.487L135.825 117.469C135.825 117.469 130.951 122.701 130.024 123.697C129.036 123.697 124.29 123.697 124.29 123.697L127.829 131.723H303.089L306.649 123.697C306.649 123.697 301.895 123.697 300.897 123.697Z"
        fill="#FC4646"
      />
      <Path
        d="M301.872 129.853L303.759 125.571H127.163L129.048 129.853H301.872Z"
        fill="#FC4646"
      />
      <Path
        d="M293.869 118.928C269.041 118.928 253.868 112.025 236.843 112.025C219.836 112.025 215.469 125.571 215.469 125.571H300.085L293.869 118.928ZM194.079 112.025C177.064 112.025 161.887 118.928 137.043 118.928L130.853 125.571H215.469C215.469 125.571 211.093 112.025 194.079 112.025"
        fill="#FC4646"
      />
      <Path
        d="M137.043 118.928C161.887 118.928 177.064 112.025 194.079 112.025C211.093 112.025 215.469 125.571 215.469 125.571V104.873C215.469 104.873 212.66 96.1547 201.701 96.1547C190.773 96.1547 181.011 100.593 165.041 100.593L137.043 118.928"
        fill="#ffffff"
      />
      <Path
        d="M293.869 118.928C269.041 118.928 253.868 112.025 236.843 112.025C219.836 112.025 215.469 125.571 215.469 125.571V104.873C215.469 104.873 218.271 96.1547 229.211 96.1547C240.152 96.1547 249.909 100.593 265.876 100.593L293.869 118.928"
        fill="#ffffff"
      />
    </Svg>
  )),
  BrandIconLight: makeIcon(({ size = 32, fill, ...otherProps } = {}) => (
    <Svg width={size} height={size} viewBox="0 0 456 163" {...otherProps}>
      <Path
        d="M255.952 144.505C260.909 145.199 267.553 145.429 276.123 145.429C300.973 145.429 323.896 137.783 323.896 115.075C323.896 93.9707 302.087 84.9253 275.833 84.9253H255.952V144.505ZM255.952 69.8547H277.755C302.9 69.8547 317.823 58.4987 317.823 43.436C317.823 25.3414 301.529 17.9334 277.203 17.9334C266.157 17.9334 259.816 18.62 255.952 19.316V69.8547ZM231.921 5.872C242.425 3.784 259.261 2.40133 275.833 2.40133C299.86 2.40133 315.341 5.87201 326.655 13.7533C336.331 19.7867 342.411 29.052 342.411 41.352C342.411 56.6533 330.252 69.8547 310.921 75.6493V76.3547C328.596 79.8294 349.316 92.1133 349.316 115.301C349.316 128.749 342.961 138.947 333.279 146.589C320.595 156.566 299.599 161.194 269.207 161.194C252.632 161.194 239.921 160.27 231.921 159.345V5.872"
        fill="#1A162A"
      />
      <Path
        d="M255.952 144.505C260.909 145.199 267.548 145.429 276.123 145.429C300.973 145.429 323.896 137.783 323.896 115.075C323.896 93.9707 302.08 84.9253 275.833 84.9253H255.952V144.505ZM255.952 69.8547H277.767C302.907 69.8547 317.823 58.4987 317.823 43.436C317.823 25.3414 301.529 17.9334 277.203 17.9334C266.167 17.9334 259.816 18.62 255.952 19.316V69.8547ZM231.921 5.872C242.425 3.784 259.279 2.40133 275.833 2.40133C299.86 2.40133 315.341 5.87201 326.655 13.7533C336.331 19.7867 342.411 29.052 342.411 41.352C342.411 56.6533 330.252 69.8547 310.921 75.6493V76.3547C328.596 79.8294 349.316 92.1133 349.316 115.301C349.316 128.749 342.961 138.947 333.279 146.589C320.595 156.566 299.599 161.194 269.207 161.194C252.632 161.194 239.921 160.27 231.921 159.345V5.872"
        fill="#1A162A"
      />
      <Path
        d="M84.8016 145.892C122.915 145.892 144.467 116.452 144.467 80.988C144.467 49.924 125.125 17.46 85.076 17.46C45.0235 17.46 25.1297 48.764 25.1297 82.6067C25.1297 115.528 46.6672 145.892 84.5125 145.892H84.8016ZM83.6917 162.365C34.2391 162.365 0 130.359 0 83.0773C0 33.4667 36.4661 0.998675 86.1677 0.998675C137.28 0.998675 170.143 33.6934 170.143 80.06C170.143 133.619 131.2 162.365 83.9724 162.365H83.6917"
        fill="#1A162A"
      />
      <Path
        d="M84.8016 145.892C122.915 145.892 144.467 116.452 144.467 80.988C144.467 49.924 125.125 17.46 85.076 17.46C45.0235 17.46 25.1297 48.764 25.1297 82.6067C25.1297 115.528 46.6672 145.892 84.5125 145.892H84.8016ZM83.6917 162.365C34.2391 162.365 0 130.359 0 83.0773C0 33.4667 36.4661 0.998675 86.1677 0.998675C137.28 0.998675 170.143 33.6934 170.143 80.06C170.143 133.619 131.2 162.365 83.9724 162.365H83.6917"
        fill="#1A162A"
      />
      <Path
        d="M223.74 154.953C215.184 158.655 197.225 162.365 174.584 162.365C122.082 162.365 82.8683 134.536 82.8683 83.0773C82.8683 33.9253 122.378 0.998675 180.099 0.998675C203.031 0.998675 217.933 5.17869 224.305 7.96002L218.223 24.4294C209.392 20.716 196.392 17.9334 180.925 17.9334C137.28 17.9334 108.289 41.352 108.289 82.38C108.289 120.86 134.519 145.199 179.555 145.199C194.456 145.199 209.392 142.652 219.055 138.716L223.74 154.953"
        fill="#1A162A"
      />
      <Path
        d="M223.74 154.953C215.184 158.655 197.225 162.365 174.584 162.365C122.082 162.365 82.8683 134.536 82.8683 83.0773C82.8683 33.9253 122.378 0.998675 180.099 0.998675C203.031 0.998675 217.933 5.17869 224.305 7.96002L218.223 24.4294C209.392 20.716 196.392 17.9334 180.925 17.9334C137.28 17.9334 108.289 41.352 108.289 82.38C108.289 120.86 134.519 145.199 179.547 145.199C194.467 145.199 209.392 142.652 219.055 138.716L223.74 154.953"
        fill="#1A162A"
      />
      <Path
        d="M355.223 3.56137H455.488V20.484H379.533V72.4133H449.704V89.0813H379.533V159.815H355.223V3.56137Z"
        fill="#1A162A"
      />
      <Path
        d="M355.223 3.56137H455.495V20.484H379.533V72.4133H449.695V89.0813H379.533V159.815H355.223V3.56137Z"
        fill="#1A162A"
      />
      <Path
        d="M300.897 123.697C299.981 122.701 295.087 117.469 295.087 117.469L266.433 98.72H265.876C257.32 98.72 250.451 97.3933 244.391 96.2187C239.213 95.2293 234.355 94.2973 229.211 94.2973C222.157 94.2973 217.768 97.736 215.469 100.952C213.148 97.736 208.768 94.2973 201.701 94.2973C196.579 94.2973 191.7 95.2293 186.533 96.2187C180.479 97.3933 173.607 98.72 165.041 98.72H164.487L135.825 117.469C135.825 117.469 130.951 122.701 130.024 123.697C129.036 123.697 124.29 123.697 124.29 123.697L127.829 131.723H303.089L306.649 123.697C306.649 123.697 301.895 123.697 300.897 123.697Z"
        fill="#FC4646"
      />
      <Path
        d="M301.872 129.853L303.759 125.571H127.163L129.048 129.853H301.872Z"
        fill="#FC4646"
      />
      <Path
        d="M293.869 118.928C269.041 118.928 253.868 112.025 236.843 112.025C219.836 112.025 215.469 125.571 215.469 125.571H300.085L293.869 118.928ZM194.079 112.025C177.064 112.025 161.887 118.928 137.043 118.928L130.853 125.571H215.469C215.469 125.571 211.093 112.025 194.079 112.025"
        fill="#FC4646"
      />
      <Path
        d="M137.043 118.928C161.887 118.928 177.064 112.025 194.079 112.025C211.093 112.025 215.469 125.571 215.469 125.571V104.873C215.469 104.873 212.66 96.1547 201.701 96.1547C190.773 96.1547 181.011 100.593 165.041 100.593L137.043 118.928"
        fill="#ffffff"
      />
      <Path
        d="M293.869 118.928C269.041 118.928 253.868 112.025 236.843 112.025C219.836 112.025 215.469 125.571 215.469 125.571V104.873C215.469 104.873 218.271 96.1547 229.211 96.1547C240.152 96.1547 249.909 100.593 265.876 100.593L293.869 118.928"
        fill="#ffffff"
      />
    </Svg>
  )),
};

ApollosConfig.loadJs({ FRAGMENTS, THEME, ICONS });
