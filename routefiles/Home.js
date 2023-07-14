import React from 'react'
import './HomeStyles.css';
import MensContent from '../components/MensContent';
import brand1 from '../assets/brand7.svg';
import brand2 from '../assets/brand2.svg';
import brand3 from '../assets/brand3.svg';
import brand4 from '../assets/brand4.svg';
import brand5 from '../assets/brand5.svg';
import brand6 from '../assets/brand6.svg';
import brand8 from '../assets/brand8.png';
import brand9 from '../assets/brand9.png';
import brand10 from '../assets/brand10.png';
import brand11 from '../assets/brand11.png';
import { Link } from 'react-router-dom';

function Home() {
  const cards =[
    {
      image:"https://images.yourstory.com/cs/7/1da9ec3014cc11e9a1b2b928167b6c62/mensfashionbanner1572434751640png?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces",
      heading:"mens accessories",
      price:"min 50% off",
      url:'/mens'
    },
    {
      image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      heading:"womens wardrobe",
      price:"flat 45% off",
      url:'/womens'
    },
    {
      image:"https://images.unsplash.com/photo-1622218286192-95f6a20083c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      heading:"kids",
      price:"get 10% off",
      url:'/kids'
    },
    {
      image:"https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1182&q=80",
      heading:"accessories",
      price:"get offers upto 50%",
      url:'/accessories',
    },  
]

const shirts=[
  {
    image:"https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
    name:"netplay",
    offer:"upto 50% off"
  },
  {
    image:"https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    name:"Indian Terrain",
    offer:"upto 20% off"
  },
  {
    image:"https://images.unsplash.com/photo-1610481960145-a5e24e5c94fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name:"Blueberry",
    offer:"upto 70% off"
  },
  {
    image:"https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name:"Wrangler",
    offer:"upto 30% off"
  },
  {
    image:"https://images.unsplash.com/photo-1603796908893-e3472142232b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    name:"Zara",
    offer:"upto 60% off"
  },
  {
    image:"https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    name:"american tourister",
    offer:"combo offer of 3"
  },
  {
    image:"https://images.unsplash.com/photo-1623998021661-dc7555b2213d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80",
    name:"urban",
    offer:"get for 3500/- off"
  },
  {
    image:"https://images.unsplash.com/photo-1499202977705-65f436dac18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    name:"burberry chinos",
    offer:"buy 1 get 1 at"
  },
  {
    image:"https://img.freepik.com/free-photo/handsome-young-retro-man-dressed-shirt-lies-floor_171337-9901.jpg?w=900&t=st=1688713991~exp=1688714591~hmac=1227bc07d270adaa3cc03a4da7d82006247a3e4e661d51596625d62438fe8162",
    name:"us polo assn",
    model:"checked shirt whith hoodie over",
    offer:"get 50% off"
  },
  {
    image:"https://img.freepik.com/free-photo/men-clothes-set_1203-7767.jpg?w=900&t=st=1688714004~exp=1688714604~hmac=60ef5be406c0a506ff64eae46f36adf05bc3bc4954f1749b8dcbf17b4225232a",
    name:"netplay",
    model:"hoodie and a shirt with inner tshirt",
    offer:"combo offer"
  },
  {
    image:"https://img.freepik.com/free-photo/stylish-guy-rhythmically-moves-enjoys-music-headphones-man-white-pants-blue-shirt-dancing-orange-background_197531-28591.jpg?w=900&t=st=1688714035~exp=1688714635~hmac=470f8030a45ff1398615984775fc5b05d0fea074116091c7567e1a3f14b89408",
    name:"zara",
    model:"plain blue jeans shirt",
    offer:"buy 1 get 1"
  },
  {
    image:"https://img.freepik.com/premium-photo/young-bearded-man-model-fashion-sitting-urban-step-wearing-casual-clothes_1139-1325.jpg?w=900",
    name:"american tourister",
    model:"blue jeans shirt with toflan",
    offer:"-/1999"
  },
  
]

const womens=[
  {
    image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=405&q=80",
    name:"crop tops",
    brand:"zara",
    offer:"get 10% off"
  },
  {
    image:"https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name:"women tees",
    offer:"get 30% off"
  },
  {
    image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name:"half tops",
    brand:"celvin klein",
    offer:"buy 2 at 33% off"
  },
  {
    image:"https://images.unsplash.com/photo-1614098097306-c67b8020c04e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80",
    name:"lehangas",
    brand:"amaerican tourister",
    offer:"get for 1599 each"
  },
  {
    image:"https://images.unsplash.com/photo-1643825664857-7e6e4124f289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name:"sweatshirts",
    offer:"get 10% off"
  },
  {
    image:"https://images.unsplash.com/photo-1580226223521-5412ec88237a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1271&q=80",
    name:"wrist watch",
    brand:"world of titan",
    offer:"at 45% off"
  },
  {
    image:"https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    name:"bags and purse",
    brand:"zara accessories",
    offer:"get for 1999 each"
  },
  {
    image:"https://images.unsplash.com/photo-1534653299134-96a171b61581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=975&q=80",
    name:"rupa sandals",
    offer:"get 15% off for today"
  },
  {
    image:"https://img.freepik.com/free-photo/happy-lady-stylish-skirt-boater-posing-pink-wall_197531-23653.jpg?w=900&t=st=1688714108~exp=1688714708~hmac=a00904a8ff137b181a9f5e1d3f92e54e5ce36070c6bd9a03668c3e3fbf135626",
    name:"sweatshirts",
    offer:"get 10% off"
  },
  {
    image:"https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?w=900&t=st=1688714119~exp=1688714719~hmac=808d8ad7d2dfeb96750b06d8f92324721d500907e7c76c8d3831ecd7181b741f",
    name:"max",
    brand:"titan enterprises",
    offer:"at 45% off"
  },
  {
    image:"https://img.freepik.com/free-photo/high-fashion-portrait-young-elegant-blonde-woman-black-wool-hat-wearing-oversize-white-fringe-poncho-with-long-grey-dress_273443-3799.jpg?w=900&t=st=1688714169~exp=1688714769~hmac=a22a4b5a026a7734720b38ac0c2c3f2a651929c696e6a979bcb1d6deeb0ed6ec",
    name:"stylish party wear",
    brand:"zara",
    offer:"get for -/1999"
  },
  {
    image:"https://img.freepik.com/free-photo/portrait-beautiful-model-sexy-female-dressed-summer-hipster-checkered-shirt-jeans-trendy-girl-posing-near-wall-street_158538-17195.jpg?w=900&t=st=1688714213~exp=1688714813~hmac=3aa7f635624bdce4c5a1eabf025a9b28dd5e36b989303c6ec2b407ac685d6792",
    name:"halayalex",
    offer:"get 15% off for today"
  },
]

const accessories=[
  {
    image:"https://img.freepik.com/free-photo/decorative-cosmetics-accessories-sunglasses-hat-white-table_176420-11865.jpg?w=900&t=st=1688714416~exp=1688715016~hmac=d47472d9bee956393a1a5b0ea1ae4af69440021df1ed70f1cf0e60a068ed7e14",
    name:"cap with goggles",
    brand:"zara",
    offer:"get 30% off"
  },
  {
    image:"https://img.freepik.com/free-photo/still-life-fashion-woman-objects-yellow_155003-8657.jpg?w=900&t=st=1688714475~exp=1688715075~hmac=851f767c0b48a2d8a7f1e2509fe2b99cb6e231e89a8c48e2bb564ae0f75db39a",
    name:"women all in one",
    offer:"get 30% off"
  },
  {
    image:"https://img.freepik.com/free-photo/still-life-casual-man-modern-male-accessories-white_155003-1724.jpg?w=900&t=st=1688714496~exp=1688715096~hmac=0791f1ef0a67a12bc19f67f8b74b421c25af3cf248eeb302356c16ac260f199e",
    name:"mens combo offer",
    brand:"celvin klein",
    offer:"buy 33% off"
  },
  {
    image:"https://img.freepik.com/free-photo/top-view-accessoires-travel-with-man-clothing-concept-bow-tie-wallet-wooden-background-watch-sunglasses-bag-hat-shoes-wood-table_1921-89.jpg?w=900&t=st=1688714526~exp=1688715126~hmac=1cb6c1b3a7f12ba82756fa5dd2430130e507acff4548c270c7a2a80bacab6ea7",
    name:"cap and goggle set",
    brand:"amaerican tourister",
    offer:"get for 1599"
  },
  {
    image:"https://img.freepik.com/free-photo/beautiful-men-fashion-wooden-background_74190-2613.jpg?w=900&t=st=1688714561~exp=1688715161~hmac=24b1727c0d435eb72f37b92bed373ed927390e1b7038d9aa39c4c61f6b696668",
    name:"purses and belts",
    offer:"get 10% off"
  },
  {
    image:"https://img.freepik.com/premium-photo/beautiful-fashion-set-men_1203-7620.jpg?w=900",
    name:"tour package",
    brand:"world of titan",
    offer:"at 45% off"
  },
  {
    image:"https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?w=740&t=st=1688714616~exp=1688715216~hmac=94b25b7ad5abc17c954307175e0045fb750344e8433a700fe14a2cc1e75c5edc",
    name:"fastarck watch",
    brand:"zara accessories",
    offer:"get for 1999/-"
  },
  {
    image:"https://img.freepik.com/free-photo/watch-black-box-bow-tie-lie-white-windowsill_8353-687.jpg?w=900&t=st=1688714642~exp=1688715242~hmac=4820ddbc3689a970513731b23031195f44eb71d2d27ce489b2bd5667320fa33c",
    name:"titan watch dial",
    offer:"get 15% off for today"
  },
  {
    image:"https://img.freepik.com/free-photo/happy-lady-stylish-skirt-boater-posing-pink-wall_197531-23653.jpg?w=900&t=st=1688714108~exp=1688714708~hmac=a00904a8ff137b181a9f5e1d3f92e54e5ce36070c6bd9a03668c3e3fbf135626",
    name:"sweatshirts",
    offer:"get 10% off"
  },
  {
    image:"https://img.freepik.com/free-photo/gray-scale-shot-black-watch_181624-422.jpg?w=900&t=st=1688714669~exp=1688715269~hmac=4117056e40fa967bbdfce43eb9805924d1280dff8752d250f72a576dea833e3f",
    name:"max",
    brand:"titan enterprises",
    offer:"at 45% off"
  },
  {
    image:"https://img.freepik.com/free-vector/watch-set-expensive-classic-clock-with-leather-metal-straps-illustration_1284-51537.jpg?w=900&t=st=1688714683~exp=1688715283~hmac=1c2d1f1a57e64c1e0869ddedb38895c54a714b5bf3990594d1effb34d59acb6f",
    name:"stylish party wear",
    brand:"titan",
    offer:"get for -/1999 each "
  },
  {
    image:"https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5810.jpg?w=900&t=st=1688714705~exp=1688715305~hmac=585ca99acb915fc6d1f13749409d880dcec5177ed36534e25ed29f4ba5d625ef",
    name:"halayalex",
    offer:"get 15% off for today"
  },
  {
    image:"https://img.freepik.com/free-psd/digital-smart-watch-icon-isolated-3d-render-illustration_439185-11924.jpg?w=740&t=st=1688714762~exp=1688715362~hmac=9ed7a616cce26210a5a4f3758ad1bdfccac7f7126e83e81dacb6277064a63ef8",
    name:"bolt",
    offer:"combo offer at -/2999"
  },
  {
    image:"https://img.freepik.com/premium-psd/realistic-smart-watch-mockup_165789-540.jpg?w=900",
    name:"smart calling watch",
    brand:"titan enterprises",
    offer:"at 45% off"
  },
  {
    image:"https://img.freepik.com/premium-vector/realistic-watch-clock-gold-silver-leather-strap-black-brown-collection_33869-2262.jpg?w=900",
    name:"your watch",
    brand:"titan",
    offer:"get for -/1999 each "
  },
  {
    image:"https://img.freepik.com/free-photo/digital-speedometer-glows-modern-car-dashboard-generated-by-ai_188544-13297.jpg?t=st=1688714863~exp=1688718463~hmac=fcde723e86b3a008caed37b9ab7d26ccee8173c58ed7ac436a4445007898885e&w=900",
    name:"wrist watch",
    offer:"get 15% off for today"
  },
]


const kids=[
  {
    image:"https://img.freepik.com/premium-photo/pink-jacket-jumper-hanger-with-sneakers-set-baby-clothes-accessories-spring-autumn-white-background-fashion-kids-outfit-flat-lay-top-view_479776-7509.jpg?w=900",
    name:"5 years old set",
    brand:"zara",
    offer:"get 30% off"
  },
  {
    image:"https://img.freepik.com/premium-photo/little-girl-white-dress-beige-raincoat-beige-hat-beige-boots-yellow-background_495771-1859.jpg?w=900",
    name:"girls in one",
    offer:"get 30% off"
  },
  {
    image:"https://img.freepik.com/free-photo/happy-funny-girl-twins-sisters-playing-laughing_155003-2791.jpg?w=900&t=st=1688715137~exp=1688715737~hmac=ee7668965444c5090f967b18406db3b7faf983963cb2537312b7f4e9a843605a",
    name:"mens combo offer",
    brand:"celvin klein",
    offer:"buy 33% off"
  },
  {
    image:"https://img.freepik.com/free-photo/portrait-cute-little-boy-stylish-jeans-clothes-looking-camera-studio_155003-15898.jpg?w=900&t=st=1688715094~exp=1688715694~hmac=ade8eedf9b73b12998f25bf63dd7967dd520b631c260f5a811ee5814e37c85b9",
   
    name:"amaerican tourister",
    offer:"get for 1599"
  },
  {
    image:"https://img.freepik.com/free-photo/top-view-non-binary-kids-playing-with-colorful-game_23-2148779611.jpg?w=900&t=st=1688715160~exp=1688715760~hmac=8f29052852d851e5a40d6303acd34f53b72988b0d0bc9bc014a52fa2119a386f",
    name:"cubic toys",
    offer:"get 10% off"
  },
  {
    image:"https://img.freepik.com/premium-photo/cute-little-indian-asian-girl-playing-with-colourful-block-toys-white-background_466689-46079.jpg?w=900",
    name:"suduko set",
    brand:"world of titan",
    offer:"at 45% off"
  },
  {
    image:"https://img.freepik.com/free-photo/baby-s-sock-pair-woolen-shoes-pacifier-cap-milk-bottle-toy-orange-background_23-2147900713.jpg?w=900&t=st=1688715222~exp=1688715822~hmac=26774385ebc2bbda6ad3c8bc791b39ee3b762952f41ee9d986e134879d35794f",
    name:"kid essentials",
    brand:"zara accessories",
    offer:"get for 1999/-"
  },
  {
    image:"https://img.freepik.com/premium-photo/baby-accessories-newborns_73944-7694.jpg?w=900",
    name:"set for 3yrs old",
    offer:"get 15% off for today"
  },
  {
    image:"https://img.freepik.com/free-photo/baby-concept-with-shoe-composition_23-2147665777.jpg?w=740&t=st=1688715280~exp=1688715880~hmac=439e890a3892abe9eb69e53ebc1c732a3aee07280faa66c68f6d9421a0eed6f2",
    name:"kids loafers",
    offer:"get 10% off"
  },
  {
    image:"https://img.freepik.com/free-photo/baby-shoes_1203-6998.jpg?w=900&t=st=1688715301~exp=1688715901~hmac=68e33b928f54cd12346d394fe70d859b8be3e57471a4943415984bc30fe2c47e",
    name:"kids shoes",
    brand:"titan enterprises",
    offer:"at 45% off"
  },
  {
    image:"https://img.freepik.com/free-photo/flat-lay-baby-clothes-with-photo-camera_23-2148251466.jpg?w=900&t=st=1688715323~exp=1688715923~hmac=1a6cfc8c4698109e9952cc897c97ea5775245597bb692d8c70ae6d3524d3054d",
    name:"stylish party wear",
    brand:"titan",
    offer:"get for -/1999 each "
  },
  {
    image:"https://img.freepik.com/free-photo/top-view-cute-little-baby-boy-accessories_23-2148415548.jpg?w=900&t=st=1688715336~exp=1688715936~hmac=16064f3ca15fdc665a0f1c58ccc73cae7396f0f9e74995fe9e257527a925c449",
    name:"halayalex",
    offer:"get 15% off for today"
  },
  {
    image:"https://img.freepik.com/free-photo/infant-background-birthday-child-newborn_1203-5976.jpg?w=900&t=st=1688715353~exp=1688715953~hmac=c3b14d835209f2a9515f495361896ca574c64a516e449a4fefc4737899925bf3",
    name:"bolt",
    offer:"combo offer at -/2999"
  },
  {
    image:"https://img.freepik.com/free-photo/baby-boy-shoes-isolated_1203-6847.jpg?t=st=1688715353~exp=1688715953~hmac=5ac482891367357796f8b7c8e5885f540f81f29c01b6e29cac72a1b782553142",
    name:"sneakers",
    brand:"titan enterprises",
    offer:"at 45% off"
  },
  {
    image:"https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?t=st=1688715377~exp=1688715977~hmac=0e1780c25da38dcf85f799f7c26fbb6f81b9ade8118fea5ed78f7ccf9590038c",
    name:"kids boots",
    brand:"titan",
    offer:"get for -/699 each "
  },
  {
    image:"https://img.freepik.com/free-photo/close-up-baby-shoe_1203-1642.jpg?w=900&t=st=1688715432~exp=1688716032~hmac=42b1e3700b4048ac415f2ce30d013a42d706479b0535507aebda482df04db749",
    name:"kids shoes",
    offer:"get 15% off for today"
  },
]

const brands =[
  {
    image:"https://img.freepik.com/free-psd/ripped-jean-shorts-with-tag-mockup_53876-65769.jpg?w=900&t=st=1688715635~exp=1688716235~hmac=1a9b47c4581a7c6e771dbca0433cd48d4dcc4af5b727b05d3c4d9e59ecc824ff",
    
    offer:"flat 50% off"
  },
  {
    image:"https://img.freepik.com/free-vector/illustration-photo-studio-stamp-banner_53876-6849.jpg?w=740&t=st=1688715707~exp=1688716307~hmac=b9ac2978ad2d11cbc6243c44cc6a586b8faa485c0323c0b049be5aa0f1768372",
    
    offer:"10% off"
  },

  {
    image:"https://i.pinimg.com/564x/b9/44/ba/b944ba0eb9e5f658fccc0f78808e6649.jpg",
    
    offer:"70% off"
  },
  {
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CK_Calvin_Klein_logo.svg/722px-CK_Calvin_Klein_logo.svg.png?20111216011954",
    
    offer:"but for 15% off"
  },

  {
    image:"https://cdn.logojoy.com/wp-content/uploads/2018/05/30143359/2_big1.png",
    
    offer:"flat 50% off"
  },
  {
    image:"https://cdn.logojoy.com/wp-content/uploads/2018/05/30143356/127.png",
    
    offer:"buy 2 get 1 "
  },
]


const utensils=[
  {
    image:"https://img.freepik.com/free-photo/top-view-wooden-spoon-empty-plastic-coffee-pot-cutting-board-grater-pink-surface_140725-94279.jpg?w=900&t=st=1688716642~exp=1688717242~hmac=33b5140cfbfb7fbf06f97b6b36995b2db98f4746389ac0e951d8b2e9193dde1e",
    name:"kitchen set",
    brand:"zara",
    offer:"but at 699/-"
  },
  {
    image:"https://img.freepik.com/free-photo/front-view-wooden-spoons-with-pepper-shaker-dark-wall-photo-color-cuisine-seasoning-salt-food-cutlery_179666-17649.jpg?w=900&t=st=1688716750~exp=1688717350~hmac=7c3b4a931c4ab33148b53bc7520405bc7eb13372877f0970e8dccffb318223e5",
    name:"cooking utensils",
    offer:"get 30% off"
  },
  {
    image:"https://img.freepik.com/free-psd/realistic-utensils-kitchen-mockup_176382-550.jpg?w=900&t=st=1688716772~exp=1688717372~hmac=fd87812827aafda477c9efae9ee3537ca8c0bf0a02577f8046d14d38edd5fae1",
    name:"storage boxes",
    brand:"celvin klein",
    offer:"buy at 23% off"
  },
  
  {
    image:"https://img.freepik.com/free-photo/curtain-with-sunlight_1339-4061.jpg?w=900&t=st=1688716914~exp=1688717514~hmac=a41832ab1f383bad11480773289fbc04f56829b4ca6fc701c58832069dfb049c",
    name:"grey coloured curtains",
    brand:"zara accessories",
    offer:"get for 499 each/-"
  },
  {
    image:"https://img.freepik.com/premium-psd/curtains_176382-2328.jpg?w=740",
    name:"set for 3yrs old",
    offer:"get 15% off for today"
  },
  {
    image:"https://img.freepik.com/premium-photo/set-cookware-utensils-kitchen-counter_93675-63050.jpg?w=900",
   
    name:"tawa set",
    offer:"get for 1599"
  },
  {
    image:"https://img.freepik.com/free-photo/kitchen-object-set-wall_1203-3427.jpg?w=900&t=st=1688716830~exp=1688717430~hmac=bbfec5e72757f645cc0e7ed4b5479d3798266fbbbf30949a3b915b96a2628c11",
    name:"chops and spoons",
    offer:"get 10% off"
  },
  {
    image:"https://img.freepik.com/free-psd/tea-set-wooden-tray_176382-1722.jpg?w=900&t=st=1688716853~exp=1688717453~hmac=b2de64da3c2e17a9a5a6e92623778e7ba9c9774879d5a88cbd03de67aa636d43",
    name:"tea cups set",
    brand:"world of titan",
    offer:"get for 78% off"
  },
  {
    image:"https://img.freepik.com/premium-photo/curtains-window_1203-10584.jpg?w=900",
    name:"brown curtains",
    offer:"get 80% off"
  },
  {
    image:"https://img.freepik.com/premium-photo/curtain-window-interior-decoration-living-room_293060-10672.jpg?w=900",
    name:"curtains set",
    brand:"titan enterprises",
    offer:"at 45% off"
  },
  {
    image:"https://img.freepik.com/free-photo/vase-plant-table_74190-3728.jpg?w=900&t=st=1688717060~exp=1688717660~hmac=84d2d1f3963159ca2c6317985406928728a26ecec1b89c308acfb8911e66d3f3",
    name:"chairs",
    brand:"titan",
    offer:"get for -/1999 each "
  },
  {
    image:"https://img.freepik.com/free-photo/home-indoor-design-concept_23-2148811458.jpg?w=900&t=st=1688717097~exp=1688717697~hmac=21c91136814faab9a8ee2f0c4f9ab82e81850c8ea6d8623eb306c7d328a66af9",
    name:"halayalex",
    offer:"get 15% off for today"
  },
  
]

  return (
    <div className='home d-flex flex-column justify-content-center' >
      
      <div className='head '>
        
        <h1 id="home" class="text-uppercase mt-4" >welcome to the world of fashion</h1>
        <div className='cards d-flex justify-content-between align-items-center'>
            {
              cards.map((card) => {
                return(
                  <Link to={card.url} className='links'>
                    <div className='card '>
                    <div className='image'>
                      <img src={card.image}></img>
                    </div>
                    <div className='content'>
                      <h2 class="text-uppercase font-5 pt-4 p-2" >{card.heading}</h2>
                      <label class="text-capitalize" >{card.price}</label>
                    </div>
                  </div>
                  </Link>
                )
              })
            }
        </div>
      </div>

      <h3 class="text-uppercase" >Popular brands</h3>

      <div className='logos d-flex justify-content-between align-items-center'>
          <img src={brand1}></img>
          <img src={brand2}></img>
          <img src={brand3}></img>
          <img src={brand4}></img>
          <img src={brand5}></img>
          <img src={brand6}></img>
          <div className='resize-brands d-flex justify-content-between align-items-center'>
          <img src={brand8}></img>
          <img src={brand9}></img>
          <img src={brand10}></img>
          <img src={brand11}></img>
          </div>
      </div>

      <div id="mens" className='mens'>
        <div className='cards w-100 d-flex justify-content-center align-items-center'>
            {
              brands.map((brand) => {
                return(
                  <Link to='/mens' className='links'>
                    <div className='card m-1'>
                    <div className='image'>
                      <img src={brand.image}></img>
                    </div>
                    <div className='content'>
                    <h2 class="text-uppercase font-5 pt-4 p-2" >{brand.name}</h2>
                      <label class="text-capitalize" >{brand.offer}</label>
                    </div>
                  </div>
                  </Link>
                )
              })
            }
        </div>
      </div>

      <h3 id="shoes" class="text-uppercase m-3 ">mens fashion</h3>

      <div className='mens'>
        <div className='cards w-100 d-flex justify-content-center align-items-center'>
            {
              shirts.map((shirt) => {
                return(
                  <Link to='/mens' className='links'>
                    <div className='card m-1'>
                    <div className='image'>
                      <img src={shirt.image}></img>
                    </div>
                    <div className='content'>
                      <h2 class="text-uppercase font-5 pt-4 p-2" >{shirt.name}</h2>
                      <label class="text-capitalize" >{shirt.offer}</label>
                    </div>
                  </div>
                  </Link>
                )
              })
            }
        </div>
      </div>
     

      <h3 class="text-uppercase m-3 ">womens stylish wear</h3>

      <div className='womens'>
        <div className='cards w-100 d-flex justify-content-center align-items-center'>
            {
              womens.map((women) => {
                return(
                  <Link to='/womens' className='links'>
                    <div className='card '>
                    <div className='image'>
                      <img src={women.image}></img>
                    </div>
                    <div className='content'>
                      <h2 class="text-uppercase font-5 pt-4 p-2" >{women.name}</h2>
                      
                      <label class="text-capitalize" >{women.offer}</label>
                    </div>
                  </div>
                  </Link>
                )
              })
            }
        </div>
      </div>

      <h3 id="mobile" class="text-uppercase m-3 ">Accessories</h3>

      <div className='mens'>
        <div className='cards w-100 d-flex justify-content-center align-items-center'>
            {
              accessories.map((accessory) => {
                return(
                  <Link to='/accessories' className='links'>
                    <div className='card m-1'>
                    <div className='image'>
                      <img src={accessory.image}></img>
                    </div>
                    <div className='content'>
                      <h2 class="text-uppercase font-5 pt-4 p-2" >{accessory.name}</h2>
                      <label class="text-capitalize" >{accessory.offer}</label>
                    </div>
                  </div>
                  </Link>
                )
              })
            }
        </div>
      </div>

      <h3 class="text-uppercase m-3 ">kids essentials</h3>

      <div className='mens'>
        <div className='cards w-100 d-flex justify-content-center align-items-center'>
            {
              kids.map((kid) => {
                return(
                  <Link to='/kids' className='links'>
                    <div className='card m-1'>
                    <div className='image'>
                      <img src={kid.image}></img>
                    </div>
                    <div className='content'>
                      <h2 class="text-uppercase font-5 pt-4 p-2" >{kid.name}</h2>
                      <label class="text-capitalize" >{kid.offer}</label>
                    </div>
                  </div>
                  </Link>
                )
              })
            }
        </div>
      </div>

      <h3 class="text-uppercase m-3 ">kitchen and home</h3>

      <div className='mens'>
        <div className='cards w-100 d-flex justify-content-center align-items-center'>
            {
              utensils.map((utensil) => {
                return(
                  <Link to='/domestic' className='links'>
                    <div className='card m-1'>
                    <div className='image'>
                      <img src={utensil.image}></img>
                    </div>
                    <div className='content'>
                      <h2 class="text-uppercase font-5 pt-4 p-2" >{utensil.name}</h2>
                      <label class="text-capitalize" >{utensil.offer}</label>
                    </div>
                  </div>
                  </Link>
                )
              })
            }
        </div>
      </div>


      
    </div>
  )
}

export default Home