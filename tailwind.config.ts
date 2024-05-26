import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    aspectRatio: {
      '3/4': '3 / 4',
    },
    colors: {
      transparent: 'transparent',
      'white' :{
        50: '#FFFFFF05',
        100: '#FFFFFF10',
        200: '#FFFFFF20',
        300: '#FFFFFF30',
        400: '#FFFFFF40',
        500: '#FFFFFF50',
        600: '#FFFFFF60',
        700: '#FFFFFF70',
        800: '#FFFFFF80',
        900: '#FFFFFF90',
        DEFAULT: '#FFFFFF',
      },
      'black' :{
        50: '#00000005',
        100: '#00000010',
        200: '#00000020',
        300: '#00000030',
        400: '#00000040',
        500: '#00000050',
        600: '#00000060',
        700: '#00000070',
        800: '#00000080',
        900: '#00000090',
        DEFAULT: '#000000',
      },
      'grayone' :{
        50: '#44444405',
        100: '#44444410',
        200: '#44444420',
        300: '#44444430',
        400: '#44444440',
        500: '#44444450',
        600: '#44444460',
        700: '#44444470',
        800: '#44444480',
        900: '#44444490',
        DEFAULT: '#444444',
      },
      'graytwo' :{
        50: '#3F3F3F05',
        100: '#3F3F3F10',
        200: '#3F3F3F20',
        300: '#3F3F3F30',
        400: '#3F3F3F40',
        500: '#3F3F3F50',
        600: '#3F3F3F60',
        700: '#3F3F3F70',
        800: '#3F3F3F80',
        900: '#3F3F3F90',
        DEFAULT: '#3F3F3F',
      },
      'ash' :{
        50: '#BEBEBE05',
        100: '#BEBEBE10',
        200: '#BEBEBE20',
        300: '#BEBEBE30',
        400: '#BEBEBE40',
        500: '#BEBEBE50',
        600: '#BEBEBE60',
        700: '#BEBEBE70',
        800: '#BEBEBE80',
        900: '#BEBEBE90',
        DEFAULT: '#BEBEBE',
      },
      'lightash' :{
        50: '#F2EFE705',
        100: '#F2EFE710',
        200: '#F2EFE720',
        300: '#F2EFE730',
        400: '#F2EFE740',
        500: '#F2EFE750',
        600: '#F2EFE760',
        700: '#F2EFE770',
        800: '#F2EFE780',
        900: '#F2EFE790',
        DEFAULT: '#F2EFE7',
      },
      'blue' :{
        50: '#00189705',
        100: '#00189710',
        200: '#00189720',
        300: '#00189730',
        400: '#00189740',
        500: '#00189750',
        600: '#00189760',
        700: '#00189770',
        800: '#00189780',
        900: '#00189790',
        DEFAULT: '#001897',
      },
      'darkblue' :{
        50: '#000F5C05',
        100: '#000F5C10',
        200: '#000F5C20',
        300: '#000F5C30',
        400: '#000F5C40',
        500: '#000F5C50',
        600: '#000F5C60',
        700: '#000F5C70',
        800: '#000F5C80',
        900: '#000F5C90',
        DEFAULT: '#000F5C',
      },
      'bg_gray' : '#F5F5F5',
      'tagbg_gray' : '#F1F1F1',

    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
