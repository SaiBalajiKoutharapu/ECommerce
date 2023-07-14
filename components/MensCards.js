const mencards = [
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688659166~exp=1688659766~hmac=7944b10bebae2e132466e0d04d6fe31dc7a3bbfcdb5e26d88280e90b6630a823",
      brand:"us polo assn",
      model:"checked shirt whith hoodie over",
      id:1,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=360&t=st=1688659334~exp=1688659934~hmac=006ea8e364708851daa2538b528f140fc1a7280c108371d91b39d8c96d2feb96",
      brand:"netplay",
      model:"hoodie and a shirt with inner tshirt",
      id:2,
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-handsome-young-man-looking-camera-smiling-while-standing-against-grey-background_425904-39817.jpg?w=360",
      brand:"zara",
      model:"plain blue jeans shirt",
      id:3,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/handsome-man-wearing-fashion-glasses-scarf_329181-3720.jpg?w=360&t=st=1688659455~exp=1688660055~hmac=f271eba975ec2db425a4d9534747327476c3072e7075d7171ee6661bde350c8d",
      brand:"american tourister",
      model:"blue jeans shirt with toflan",
      id:4,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/premium-photo/only-forward-stylish-darkhaired-man-standing-looking-away-isolated-white-background_386167-8271.jpg?w=360",
      brand:"arrow",
      model:"dark blue black designed coat",
      id:5,
      price:"-/2999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=900&t=st=1688712501~exp=1688713101~hmac=3fbeeb48d5e774ed16dfeb2128a84f721db5c2a5d50bf235ff594d2896379c7d",
      brand:"us polo assn",
      model:"Blue jeans shirt ",
      id:6,
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?w=900&t=st=1688712547~exp=1688713147~hmac=089ef36b438e372fb9f10f5ccf76dc37a535e8b655f25a8aa5f3204a6efaa123",
      brand:"Guucio",
      model:"brown patternd shirt with brown tshirt",
      id:7,
      price:"-/1299"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      id:8,
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1688712656~exp=1688713256~hmac=938383dc6b44d7aee4931455562114d050fe42a9372ac78becca07c6be69c316",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      id:9,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-young-man-posing-jacket-boots-jeans-sunglasses_374827-76.jpg?w=360",
      brand:"us polo assn",
      model:"brown bomber jacket ",
      id:10,
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-guy-with-fashion-look-wear-modern-clothes-isolated-white-casual_545934-24543.jpg?w=360",
      brand:"redFox",
      model:"v-neck dark violet sweatshirt",
      id:11,
      price:"-/699"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      id:12,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      id:13,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      id:14,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      id:15,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      id:16,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      id:17,
      price:"-/1699"
    },
    
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      id:18,
      price:"-/1199"
    },
    
    {
      image:"https://img.freepik.com/free-photo/young-handsome-hipster-man-isolated-white-studio-background-stylish-outfit-denim-shirt-trousers-hat-sunglasses-sitting-chair-hands-together-pose-smiling-happy-positive_285396-1509.jpg?w=360&t=st=1688712832~exp=1688713432~hmac=b79ca7e043c933e37258f038b5b8920d5c1bed07c0b13aebf48d54e70b933372",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      id:19,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/young-man-sitting-small-stool-against-white-wall_231208-1174.jpg?w=360&t=st=1688712867~exp=1688713467~hmac=ae853622b3a60ce6076b7d705894347c4c4f232a708ee016a0f448e0292012e4",
      brand:"us polo assn",
      model:"full sleeve light white smoked shirt ",
      id:20,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/why-be-boring-when-you-can-make-statement-studio-shot-stylishly-dressed-young-man-posing-against-grey-background_590464-45393.jpg?w=740",
      brand:"redFox",
      model:"brown suit",
      id:21,
      price:"-/3299"
    },
    {
      image:"https://img.freepik.com/premium-photo/beautiful-brutal-tanned-hipster-man-black-shirt-glasses_149155-2568.jpg?w=360",
      brand:"armani",
      model:"blue coloured shirt",
      id:22,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/male-athlete-doing-fitness-training-workout-outside-gym_1328-4778.jpg?w=360&t=st=1688713013~exp=1688713613~hmac=6a4416b46e38f9691778a43b04200dcd4021554be45abd5e061b5bf9e99c31ac",
      brand:"vintage.co",
      model:"brown color hoodie",
      id:23,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260949.jpg?w=360&t=st=1688713069~exp=1688713669~hmac=deb8d586443898e38a1b881a35d91c63e804345c5af712a1838167951a62fc75",
      brand:"us polo assn",
      model:"full sleeve blue hoodie ",
      id:23,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/young-man-white-sweatshirt-with-hood-sweatpants-sits-wooden-cube-blue-studio-background_105609-7718.jpg?w=360",
      brand:"netplay",
      model:"white full sleeve hoodie",
      id:24,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-young-african-man_23-2148854489.jpg?w=740&t=st=1688713125~exp=1688713725~hmac=128cba9b5a5c011f6f75a2e93a2ec45584082223334a7565b1d1205caf38cb00",
      brand:"armani",
      model:"brown full sleeve t-Shirt",
      id:25,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/medium-shot-young-man-wearing-black-hoodie_23-2149359862.jpg?w=360&t=st=1688713162~exp=1688713762~hmac=bfcf89504273201c4bfa9d4f22bbbac6bc6c23e971f0ed5c356989ae963dce45",
      brand:"vintage.co",
      model:"black coloured hoodie",
      id:26,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5116.jpg?w=360&t=st=1688713226~exp=1688713826~hmac=d99a09c0c3ba4867bc01580b836bf3f1f42b812f9edaa9806c6a0fb2af9b0878",
      brand:"arrow",
      model:"brown coloured jacket",
      id:27,
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11452.jpg?w=360&t=st=1688713255~exp=1688713855~hmac=10644f3d00ca638404299a5ee0d17b21be888a3546b9304bdab7f136f674b2fd",
      brand:"rabbit",
      model:"white smoked coloured detective suit",
      id:28,
      price:"-/2399"
    },
    {
      image:"https://img.freepik.com/premium-photo/man-white-shirt-black-pants-is-posing-front-wooden-fence_887512-733.jpg?w=360",
      brand:"us polo assn",
      model:"full sleeve light white smoked hoodie",
      id:29,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/man-near-green-leaves-background_23-2147805544.jpg?w=360&t=st=1688713313~exp=1688713913~hmac=478db01aa443fea62518a67a3a14fb6b00364c13d60df040dce38e0b11fe1af4",
      brand:"redFox",
      model:"purple hoodie",
      id:30,
      price:"-/899"
    },
    {
      image:"https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?w=360&t=st=1688713379~exp=1688713979~hmac=aaf04e33c643d444be6a4b88c7448f9718f2e813fb1560b465ebdc9b4ee027b5",
      brand:"armani",
      model:"brown coloured pant",
      id:31,
      price:"-/1099"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688713418~exp=1688714018~hmac=a4918754275100fab096b2d20d616e5a80d5da3d40ec9162501e1c0d36b2e468",
      brand:"vintage.co",
      model:"red chinos",
      id:32,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/businessman-wearing-black-pants-with-white-shirt_53876-102237.jpg?w=360&t=st=1688713454~exp=1688714054~hmac=70ca452c5bb030768648ef4083b343cdac435d22ebc1cc85e233423877446007",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      id:33,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/male-suit-close-up-holding-coffee-hand_1303-10298.jpg?w=360&t=st=1688713528~exp=1688714128~hmac=1adcc993cc0c6ab49b1f3c0034f7cf419f62c01ad953d16033d7dcb01d594a25",
      brand:"netplay",
      model:"patterned suit pant",
      id:34,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      id:35,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      id:36,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      id:37,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      id:38,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      id:39,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      id:40,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688659166~exp=1688659766~hmac=7944b10bebae2e132466e0d04d6fe31dc7a3bbfcdb5e26d88280e90b6630a823",
      brand:"us polo assn",
      model:"checked shirt whith hoodie over",
      id:41,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=360&t=st=1688659334~exp=1688659934~hmac=006ea8e364708851daa2538b528f140fc1a7280c108371d91b39d8c96d2feb96",
      brand:"netplay",
      model:"hoodie and a shirt with inner tshirt",
      id:42,
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-handsome-young-man-looking-camera-smiling-while-standing-against-grey-background_425904-39817.jpg?w=360",
      brand:"zara",
      model:"plain blue jeans shirt",
      id:43,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/handsome-man-wearing-fashion-glasses-scarf_329181-3720.jpg?w=360&t=st=1688659455~exp=1688660055~hmac=f271eba975ec2db425a4d9534747327476c3072e7075d7171ee6661bde350c8d",
      brand:"american tourister",
      model:"blue jeans shirt with toflan",
      id:44,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/premium-photo/only-forward-stylish-darkhaired-man-standing-looking-away-isolated-white-background_386167-8271.jpg?w=360",
      brand:"arrow",
      model:"dark blue black designed coat",
      id:45,
      price:"-/2999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=900&t=st=1688712501~exp=1688713101~hmac=3fbeeb48d5e774ed16dfeb2128a84f721db5c2a5d50bf235ff594d2896379c7d",
      brand:"us polo assn",
      model:"Blue jeans shirt ",
      id:46,
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?w=900&t=st=1688712547~exp=1688713147~hmac=089ef36b438e372fb9f10f5ccf76dc37a535e8b655f25a8aa5f3204a6efaa123",
      brand:"Guucio",
      model:"brown patternd shirt with brown tshirt",
      id:47,
      price:"-/1299"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      id:48,
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1688712656~exp=1688713256~hmac=938383dc6b44d7aee4931455562114d050fe42a9372ac78becca07c6be69c316",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      id:49,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-young-man-posing-jacket-boots-jeans-sunglasses_374827-76.jpg?w=360",
      brand:"us polo assn",
      model:"brown bomber jacket ",
      id:50,
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-guy-with-fashion-look-wear-modern-clothes-isolated-white-casual_545934-24543.jpg?w=360",
      brand:"redFox",
      model:"v-neck dark violet sweatshirt",
      id:51,
      price:"-/699"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      id:52,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      id:53,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      id:54,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      id:55,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      id:56,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      id:57,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      id:58,
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/young-handsome-hipster-man-isolated-white-studio-background-stylish-outfit-denim-shirt-trousers-hat-sunglasses-sitting-chair-hands-together-pose-smiling-happy-positive_285396-1509.jpg?w=360&t=st=1688712832~exp=1688713432~hmac=b79ca7e043c933e37258f038b5b8920d5c1bed07c0b13aebf48d54e70b933372",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      id:59,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/young-man-sitting-small-stool-against-white-wall_231208-1174.jpg?w=360&t=st=1688712867~exp=1688713467~hmac=ae853622b3a60ce6076b7d705894347c4c4f232a708ee016a0f448e0292012e4",
      brand:"us polo assn",
      model:"full sleeve light white smoked shirt ",
      id:60,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/why-be-boring-when-you-can-make-statement-studio-shot-stylishly-dressed-young-man-posing-against-grey-background_590464-45393.jpg?w=740",
      brand:"redFox",
      model:"brown suit",
      id:61,
      price:"-/3299"
    },
    {
      image:"https://img.freepik.com/premium-photo/beautiful-brutal-tanned-hipster-man-black-shirt-glasses_149155-2568.jpg?w=360",
      brand:"armani",
      model:"blue coloured shirt",
      id:62,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/male-athlete-doing-fitness-training-workout-outside-gym_1328-4778.jpg?w=360&t=st=1688713013~exp=1688713613~hmac=6a4416b46e38f9691778a43b04200dcd4021554be45abd5e061b5bf9e99c31ac",
      brand:"vintage.co",
      model:"brown color hoodie",
      id:63,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260949.jpg?w=360&t=st=1688713069~exp=1688713669~hmac=deb8d586443898e38a1b881a35d91c63e804345c5af712a1838167951a62fc75",
      brand:"us polo assn",
      model:"full sleeve blue hoodie ",
      id:64,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/young-man-white-sweatshirt-with-hood-sweatpants-sits-wooden-cube-blue-studio-background_105609-7718.jpg?w=360",
      brand:"netplay",
      model:"white full sleeve hoodie",
      id:65,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-young-african-man_23-2148854489.jpg?w=740&t=st=1688713125~exp=1688713725~hmac=128cba9b5a5c011f6f75a2e93a2ec45584082223334a7565b1d1205caf38cb00",
      brand:"armani",
      model:"brown full sleeve t-Shirt",
      id:66,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/medium-shot-young-man-wearing-black-hoodie_23-2149359862.jpg?w=360&t=st=1688713162~exp=1688713762~hmac=bfcf89504273201c4bfa9d4f22bbbac6bc6c23e971f0ed5c356989ae963dce45",
      brand:"vintage.co",
      model:"black coloured hoodie",
      id:97,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5116.jpg?w=360&t=st=1688713226~exp=1688713826~hmac=d99a09c0c3ba4867bc01580b836bf3f1f42b812f9edaa9806c6a0fb2af9b0878",
      brand:"arrow",
      model:"brown coloured jacket",
      id:68,
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11452.jpg?w=360&t=st=1688713255~exp=1688713855~hmac=10644f3d00ca638404299a5ee0d17b21be888a3546b9304bdab7f136f674b2fd",
      brand:"rabbit",
      model:"white smoked coloured detective suit",
      id:69,
      price:"-/2399"
    },
    {
      image:"https://img.freepik.com/premium-photo/man-white-shirt-black-pants-is-posing-front-wooden-fence_887512-733.jpg?w=360",
      brand:"us polo assn",
      model:"full sleeve light white smoked hoodie",
      id:70,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/man-near-green-leaves-background_23-2147805544.jpg?w=360&t=st=1688713313~exp=1688713913~hmac=478db01aa443fea62518a67a3a14fb6b00364c13d60df040dce38e0b11fe1af4",
      brand:"redFox",
      model:"purple hoodie",
      id:71,
      price:"-/899"
    },
    {
      image:"https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?w=360&t=st=1688713379~exp=1688713979~hmac=aaf04e33c643d444be6a4b88c7448f9718f2e813fb1560b465ebdc9b4ee027b5",
      brand:"armani",
      model:"brown coloured pant",
      id:72,
      price:"-/1099"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688713418~exp=1688714018~hmac=a4918754275100fab096b2d20d616e5a80d5da3d40ec9162501e1c0d36b2e468",
      brand:"vintage.co",
      model:"red chinos",
      id:73,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/businessman-wearing-black-pants-with-white-shirt_53876-102237.jpg?w=360&t=st=1688713454~exp=1688714054~hmac=70ca452c5bb030768648ef4083b343cdac435d22ebc1cc85e233423877446007",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      id:74,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/male-suit-close-up-holding-coffee-hand_1303-10298.jpg?w=360&t=st=1688713528~exp=1688714128~hmac=1adcc993cc0c6ab49b1f3c0034f7cf419f62c01ad953d16033d7dcb01d594a25",
      brand:"netplay",
      model:"patterned suit pant",
      id:75,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      id:76,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      id:77,
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      id:78,
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      id:79,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      id:80,
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688659166~exp=1688659766~hmac=7944b10bebae2e132466e0d04d6fe31dc7a3bbfcdb5e26d88280e90b6630a823",
      brand:"us polo assn",
      model:"checked shirt whith hoodie over",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=360&t=st=1688659334~exp=1688659934~hmac=006ea8e364708851daa2538b528f140fc1a7280c108371d91b39d8c96d2feb96",
      brand:"netplay",
      model:"hoodie and a shirt with inner tshirt",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-handsome-young-man-looking-camera-smiling-while-standing-against-grey-background_425904-39817.jpg?w=360",
      brand:"zara",
      model:"plain blue jeans shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/handsome-man-wearing-fashion-glasses-scarf_329181-3720.jpg?w=360&t=st=1688659455~exp=1688660055~hmac=f271eba975ec2db425a4d9534747327476c3072e7075d7171ee6661bde350c8d",
      brand:"american tourister",
      model:"blue jeans shirt with toflan",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/premium-photo/only-forward-stylish-darkhaired-man-standing-looking-away-isolated-white-background_386167-8271.jpg?w=360",
      brand:"arrow",
      model:"dark blue black designed coat",
      price:"-/2999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=900&t=st=1688712501~exp=1688713101~hmac=3fbeeb48d5e774ed16dfeb2128a84f721db5c2a5d50bf235ff594d2896379c7d",
      brand:"us polo assn",
      model:"Blue jeans shirt ",
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?w=900&t=st=1688712547~exp=1688713147~hmac=089ef36b438e372fb9f10f5ccf76dc37a535e8b655f25a8aa5f3204a6efaa123",
      brand:"Guucio",
      model:"brown patternd shirt with brown tshirt",
      price:"-/1299"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1688712656~exp=1688713256~hmac=938383dc6b44d7aee4931455562114d050fe42a9372ac78becca07c6be69c316",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-young-man-posing-jacket-boots-jeans-sunglasses_374827-76.jpg?w=360",
      brand:"us polo assn",
      model:"brown bomber jacket ",
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-guy-with-fashion-look-wear-modern-clothes-isolated-white-casual_545934-24543.jpg?w=360",
      brand:"redFox",
      model:"v-neck dark violet sweatshirt",
      price:"-/699"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/young-handsome-hipster-man-isolated-white-studio-background-stylish-outfit-denim-shirt-trousers-hat-sunglasses-sitting-chair-hands-together-pose-smiling-happy-positive_285396-1509.jpg?w=360&t=st=1688712832~exp=1688713432~hmac=b79ca7e043c933e37258f038b5b8920d5c1bed07c0b13aebf48d54e70b933372",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/young-man-sitting-small-stool-against-white-wall_231208-1174.jpg?w=360&t=st=1688712867~exp=1688713467~hmac=ae853622b3a60ce6076b7d705894347c4c4f232a708ee016a0f448e0292012e4",
      brand:"us polo assn",
      model:"full sleeve light white smoked shirt ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/why-be-boring-when-you-can-make-statement-studio-shot-stylishly-dressed-young-man-posing-against-grey-background_590464-45393.jpg?w=740",
      brand:"redFox",
      model:"brown suit",
      price:"-/3299"
    },
    {
      image:"https://img.freepik.com/premium-photo/beautiful-brutal-tanned-hipster-man-black-shirt-glasses_149155-2568.jpg?w=360",
      brand:"armani",
      model:"blue coloured shirt",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/male-athlete-doing-fitness-training-workout-outside-gym_1328-4778.jpg?w=360&t=st=1688713013~exp=1688713613~hmac=6a4416b46e38f9691778a43b04200dcd4021554be45abd5e061b5bf9e99c31ac",
      brand:"vintage.co",
      model:"brown color hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260949.jpg?w=360&t=st=1688713069~exp=1688713669~hmac=deb8d586443898e38a1b881a35d91c63e804345c5af712a1838167951a62fc75",
      brand:"us polo assn",
      model:"full sleeve blue hoodie ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/young-man-white-sweatshirt-with-hood-sweatpants-sits-wooden-cube-blue-studio-background_105609-7718.jpg?w=360",
      brand:"netplay",
      model:"white full sleeve hoodie",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-young-african-man_23-2148854489.jpg?w=740&t=st=1688713125~exp=1688713725~hmac=128cba9b5a5c011f6f75a2e93a2ec45584082223334a7565b1d1205caf38cb00",
      brand:"armani",
      model:"brown full sleeve t-Shirt",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/medium-shot-young-man-wearing-black-hoodie_23-2149359862.jpg?w=360&t=st=1688713162~exp=1688713762~hmac=bfcf89504273201c4bfa9d4f22bbbac6bc6c23e971f0ed5c356989ae963dce45",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5116.jpg?w=360&t=st=1688713226~exp=1688713826~hmac=d99a09c0c3ba4867bc01580b836bf3f1f42b812f9edaa9806c6a0fb2af9b0878",
      brand:"arrow",
      model:"brown coloured jacket",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11452.jpg?w=360&t=st=1688713255~exp=1688713855~hmac=10644f3d00ca638404299a5ee0d17b21be888a3546b9304bdab7f136f674b2fd",
      brand:"rabbit",
      model:"white smoked coloured detective suit",
      price:"-/2399"
    },
    {
      image:"https://img.freepik.com/premium-photo/man-white-shirt-black-pants-is-posing-front-wooden-fence_887512-733.jpg?w=360",
      brand:"us polo assn",
      model:"full sleeve light white smoked hoodie",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/man-near-green-leaves-background_23-2147805544.jpg?w=360&t=st=1688713313~exp=1688713913~hmac=478db01aa443fea62518a67a3a14fb6b00364c13d60df040dce38e0b11fe1af4",
      brand:"redFox",
      model:"purple hoodie",
      price:"-/899"
    },
    {
      image:"https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?w=360&t=st=1688713379~exp=1688713979~hmac=aaf04e33c643d444be6a4b88c7448f9718f2e813fb1560b465ebdc9b4ee027b5",
      brand:"armani",
      model:"brown coloured pant",
      price:"-/1099"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688713418~exp=1688714018~hmac=a4918754275100fab096b2d20d616e5a80d5da3d40ec9162501e1c0d36b2e468",
      brand:"vintage.co",
      model:"red chinos",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/businessman-wearing-black-pants-with-white-shirt_53876-102237.jpg?w=360&t=st=1688713454~exp=1688714054~hmac=70ca452c5bb030768648ef4083b343cdac435d22ebc1cc85e233423877446007",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/male-suit-close-up-holding-coffee-hand_1303-10298.jpg?w=360&t=st=1688713528~exp=1688714128~hmac=1adcc993cc0c6ab49b1f3c0034f7cf419f62c01ad953d16033d7dcb01d594a25",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688659166~exp=1688659766~hmac=7944b10bebae2e132466e0d04d6fe31dc7a3bbfcdb5e26d88280e90b6630a823",
      brand:"us polo assn",
      model:"checked shirt whith hoodie over",
      id:1,
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=360&t=st=1688659334~exp=1688659934~hmac=006ea8e364708851daa2538b528f140fc1a7280c108371d91b39d8c96d2feb96",
      brand:"netplay",
      model:"hoodie and a shirt with inner tshirt",
      id:2,
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-handsome-young-man-looking-camera-smiling-while-standing-against-grey-background_425904-39817.jpg?w=360",
      brand:"zara",
      model:"plain blue jeans shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/handsome-man-wearing-fashion-glasses-scarf_329181-3720.jpg?w=360&t=st=1688659455~exp=1688660055~hmac=f271eba975ec2db425a4d9534747327476c3072e7075d7171ee6661bde350c8d",
      brand:"american tourister",
      model:"blue jeans shirt with toflan",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/premium-photo/only-forward-stylish-darkhaired-man-standing-looking-away-isolated-white-background_386167-8271.jpg?w=360",
      brand:"arrow",
      model:"dark blue black designed coat",
      price:"-/2999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=900&t=st=1688712501~exp=1688713101~hmac=3fbeeb48d5e774ed16dfeb2128a84f721db5c2a5d50bf235ff594d2896379c7d",
      brand:"us polo assn",
      model:"Blue jeans shirt ",
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?w=900&t=st=1688712547~exp=1688713147~hmac=089ef36b438e372fb9f10f5ccf76dc37a535e8b655f25a8aa5f3204a6efaa123",
      brand:"Guucio",
      model:"brown patternd shirt with brown tshirt",
      price:"-/1299"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1688712656~exp=1688713256~hmac=938383dc6b44d7aee4931455562114d050fe42a9372ac78becca07c6be69c316",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-young-man-posing-jacket-boots-jeans-sunglasses_374827-76.jpg?w=360",
      brand:"us polo assn",
      model:"brown bomber jacket ",
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-guy-with-fashion-look-wear-modern-clothes-isolated-white-casual_545934-24543.jpg?w=360",
      brand:"redFox",
      model:"v-neck dark violet sweatshirt",
      price:"-/699"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    
    {
      image:"https://img.freepik.com/free-photo/young-handsome-hipster-man-isolated-white-studio-background-stylish-outfit-denim-shirt-trousers-hat-sunglasses-sitting-chair-hands-together-pose-smiling-happy-positive_285396-1509.jpg?w=360&t=st=1688712832~exp=1688713432~hmac=b79ca7e043c933e37258f038b5b8920d5c1bed07c0b13aebf48d54e70b933372",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/young-man-sitting-small-stool-against-white-wall_231208-1174.jpg?w=360&t=st=1688712867~exp=1688713467~hmac=ae853622b3a60ce6076b7d705894347c4c4f232a708ee016a0f448e0292012e4",
      brand:"us polo assn",
      model:"full sleeve light white smoked shirt ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/why-be-boring-when-you-can-make-statement-studio-shot-stylishly-dressed-young-man-posing-against-grey-background_590464-45393.jpg?w=740",
      brand:"redFox",
      model:"brown suit",
      price:"-/3299"
    },
    {
      image:"https://img.freepik.com/premium-photo/beautiful-brutal-tanned-hipster-man-black-shirt-glasses_149155-2568.jpg?w=360",
      brand:"armani",
      model:"blue coloured shirt",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/male-athlete-doing-fitness-training-workout-outside-gym_1328-4778.jpg?w=360&t=st=1688713013~exp=1688713613~hmac=6a4416b46e38f9691778a43b04200dcd4021554be45abd5e061b5bf9e99c31ac",
      brand:"vintage.co",
      model:"brown color hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260949.jpg?w=360&t=st=1688713069~exp=1688713669~hmac=deb8d586443898e38a1b881a35d91c63e804345c5af712a1838167951a62fc75",
      brand:"us polo assn",
      model:"full sleeve blue hoodie ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/young-man-white-sweatshirt-with-hood-sweatpants-sits-wooden-cube-blue-studio-background_105609-7718.jpg?w=360",
      brand:"netplay",
      model:"white full sleeve hoodie",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-young-african-man_23-2148854489.jpg?w=740&t=st=1688713125~exp=1688713725~hmac=128cba9b5a5c011f6f75a2e93a2ec45584082223334a7565b1d1205caf38cb00",
      brand:"armani",
      model:"brown full sleeve t-Shirt",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/medium-shot-young-man-wearing-black-hoodie_23-2149359862.jpg?w=360&t=st=1688713162~exp=1688713762~hmac=bfcf89504273201c4bfa9d4f22bbbac6bc6c23e971f0ed5c356989ae963dce45",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5116.jpg?w=360&t=st=1688713226~exp=1688713826~hmac=d99a09c0c3ba4867bc01580b836bf3f1f42b812f9edaa9806c6a0fb2af9b0878",
      brand:"arrow",
      model:"brown coloured jacket",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11452.jpg?w=360&t=st=1688713255~exp=1688713855~hmac=10644f3d00ca638404299a5ee0d17b21be888a3546b9304bdab7f136f674b2fd",
      brand:"rabbit",
      model:"white smoked coloured detective suit",
      price:"-/2399"
    },
    {
      image:"https://img.freepik.com/premium-photo/man-white-shirt-black-pants-is-posing-front-wooden-fence_887512-733.jpg?w=360",
      brand:"us polo assn",
      model:"full sleeve light white smoked hoodie",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/man-near-green-leaves-background_23-2147805544.jpg?w=360&t=st=1688713313~exp=1688713913~hmac=478db01aa443fea62518a67a3a14fb6b00364c13d60df040dce38e0b11fe1af4",
      brand:"redFox",
      model:"purple hoodie",
      price:"-/899"
    },
    {
      image:"https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?w=360&t=st=1688713379~exp=1688713979~hmac=aaf04e33c643d444be6a4b88c7448f9718f2e813fb1560b465ebdc9b4ee027b5",
      brand:"armani",
      model:"brown coloured pant",
      price:"-/1099"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688713418~exp=1688714018~hmac=a4918754275100fab096b2d20d616e5a80d5da3d40ec9162501e1c0d36b2e468",
      brand:"vintage.co",
      model:"red chinos",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/businessman-wearing-black-pants-with-white-shirt_53876-102237.jpg?w=360&t=st=1688713454~exp=1688714054~hmac=70ca452c5bb030768648ef4083b343cdac435d22ebc1cc85e233423877446007",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/male-suit-close-up-holding-coffee-hand_1303-10298.jpg?w=360&t=st=1688713528~exp=1688714128~hmac=1adcc993cc0c6ab49b1f3c0034f7cf419f62c01ad953d16033d7dcb01d594a25",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688659166~exp=1688659766~hmac=7944b10bebae2e132466e0d04d6fe31dc7a3bbfcdb5e26d88280e90b6630a823",
      brand:"us polo assn",
      model:"checked shirt whith hoodie over",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=360&t=st=1688659334~exp=1688659934~hmac=006ea8e364708851daa2538b528f140fc1a7280c108371d91b39d8c96d2feb96",
      brand:"netplay",
      model:"hoodie and a shirt with inner tshirt",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-handsome-young-man-looking-camera-smiling-while-standing-against-grey-background_425904-39817.jpg?w=360",
      brand:"zara",
      model:"plain blue jeans shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/handsome-man-wearing-fashion-glasses-scarf_329181-3720.jpg?w=360&t=st=1688659455~exp=1688660055~hmac=f271eba975ec2db425a4d9534747327476c3072e7075d7171ee6661bde350c8d",
      brand:"american tourister",
      model:"blue jeans shirt with toflan",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/premium-photo/only-forward-stylish-darkhaired-man-standing-looking-away-isolated-white-background_386167-8271.jpg?w=360",
      brand:"arrow",
      model:"dark blue black designed coat",
      price:"-/2999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=900&t=st=1688712501~exp=1688713101~hmac=3fbeeb48d5e774ed16dfeb2128a84f721db5c2a5d50bf235ff594d2896379c7d",
      brand:"us polo assn",
      model:"Blue jeans shirt ",
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?w=900&t=st=1688712547~exp=1688713147~hmac=089ef36b438e372fb9f10f5ccf76dc37a535e8b655f25a8aa5f3204a6efaa123",
      brand:"Guucio",
      model:"brown patternd shirt with brown tshirt",
      price:"-/1299"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1688712656~exp=1688713256~hmac=938383dc6b44d7aee4931455562114d050fe42a9372ac78becca07c6be69c316",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-young-man-posing-jacket-boots-jeans-sunglasses_374827-76.jpg?w=360",
      brand:"us polo assn",
      model:"brown bomber jacket ",
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-guy-with-fashion-look-wear-modern-clothes-isolated-white-casual_545934-24543.jpg?w=360",
      brand:"redFox",
      model:"v-neck dark violet sweatshirt",
      price:"-/699"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/young-handsome-hipster-man-isolated-white-studio-background-stylish-outfit-denim-shirt-trousers-hat-sunglasses-sitting-chair-hands-together-pose-smiling-happy-positive_285396-1509.jpg?w=360&t=st=1688712832~exp=1688713432~hmac=b79ca7e043c933e37258f038b5b8920d5c1bed07c0b13aebf48d54e70b933372",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/young-man-sitting-small-stool-against-white-wall_231208-1174.jpg?w=360&t=st=1688712867~exp=1688713467~hmac=ae853622b3a60ce6076b7d705894347c4c4f232a708ee016a0f448e0292012e4",
      brand:"us polo assn",
      model:"full sleeve light white smoked shirt ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/why-be-boring-when-you-can-make-statement-studio-shot-stylishly-dressed-young-man-posing-against-grey-background_590464-45393.jpg?w=740",
      brand:"redFox",
      model:"brown suit",
      price:"-/3299"
    },
    {
      image:"https://img.freepik.com/premium-photo/beautiful-brutal-tanned-hipster-man-black-shirt-glasses_149155-2568.jpg?w=360",
      brand:"armani",
      model:"blue coloured shirt",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/male-athlete-doing-fitness-training-workout-outside-gym_1328-4778.jpg?w=360&t=st=1688713013~exp=1688713613~hmac=6a4416b46e38f9691778a43b04200dcd4021554be45abd5e061b5bf9e99c31ac",
      brand:"vintage.co",
      model:"brown color hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260949.jpg?w=360&t=st=1688713069~exp=1688713669~hmac=deb8d586443898e38a1b881a35d91c63e804345c5af712a1838167951a62fc75",
      brand:"us polo assn",
      model:"full sleeve blue hoodie ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/young-man-white-sweatshirt-with-hood-sweatpants-sits-wooden-cube-blue-studio-background_105609-7718.jpg?w=360",
      brand:"netplay",
      model:"white full sleeve hoodie",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-young-african-man_23-2148854489.jpg?w=740&t=st=1688713125~exp=1688713725~hmac=128cba9b5a5c011f6f75a2e93a2ec45584082223334a7565b1d1205caf38cb00",
      brand:"armani",
      model:"brown full sleeve t-Shirt",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/medium-shot-young-man-wearing-black-hoodie_23-2149359862.jpg?w=360&t=st=1688713162~exp=1688713762~hmac=bfcf89504273201c4bfa9d4f22bbbac6bc6c23e971f0ed5c356989ae963dce45",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5116.jpg?w=360&t=st=1688713226~exp=1688713826~hmac=d99a09c0c3ba4867bc01580b836bf3f1f42b812f9edaa9806c6a0fb2af9b0878",
      brand:"arrow",
      model:"brown coloured jacket",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11452.jpg?w=360&t=st=1688713255~exp=1688713855~hmac=10644f3d00ca638404299a5ee0d17b21be888a3546b9304bdab7f136f674b2fd",
      brand:"rabbit",
      model:"white smoked coloured detective suit",
      price:"-/2399"
    },
    {
      image:"https://img.freepik.com/premium-photo/man-white-shirt-black-pants-is-posing-front-wooden-fence_887512-733.jpg?w=360",
      brand:"us polo assn",
      model:"full sleeve light white smoked hoodie",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/man-near-green-leaves-background_23-2147805544.jpg?w=360&t=st=1688713313~exp=1688713913~hmac=478db01aa443fea62518a67a3a14fb6b00364c13d60df040dce38e0b11fe1af4",
      brand:"redFox",
      model:"purple hoodie",
      price:"-/899"
    },
    {
      image:"https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?w=360&t=st=1688713379~exp=1688713979~hmac=aaf04e33c643d444be6a4b88c7448f9718f2e813fb1560b465ebdc9b4ee027b5",
      brand:"armani",
      model:"brown coloured pant",
      price:"-/1099"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688713418~exp=1688714018~hmac=a4918754275100fab096b2d20d616e5a80d5da3d40ec9162501e1c0d36b2e468",
      brand:"vintage.co",
      model:"red chinos",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/businessman-wearing-black-pants-with-white-shirt_53876-102237.jpg?w=360&t=st=1688713454~exp=1688714054~hmac=70ca452c5bb030768648ef4083b343cdac435d22ebc1cc85e233423877446007",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/male-suit-close-up-holding-coffee-hand_1303-10298.jpg?w=360&t=st=1688713528~exp=1688714128~hmac=1adcc993cc0c6ab49b1f3c0034f7cf419f62c01ad953d16033d7dcb01d594a25",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688659166~exp=1688659766~hmac=7944b10bebae2e132466e0d04d6fe31dc7a3bbfcdb5e26d88280e90b6630a823",
      brand:"us polo assn",
      model:"checked shirt whith hoodie over",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=360&t=st=1688659334~exp=1688659934~hmac=006ea8e364708851daa2538b528f140fc1a7280c108371d91b39d8c96d2feb96",
      brand:"netplay",
      model:"hoodie and a shirt with inner tshirt",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-handsome-young-man-looking-camera-smiling-while-standing-against-grey-background_425904-39817.jpg?w=360",
      brand:"zara",
      model:"plain blue jeans shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/handsome-man-wearing-fashion-glasses-scarf_329181-3720.jpg?w=360&t=st=1688659455~exp=1688660055~hmac=f271eba975ec2db425a4d9534747327476c3072e7075d7171ee6661bde350c8d",
      brand:"american tourister",
      model:"blue jeans shirt with toflan",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/premium-photo/only-forward-stylish-darkhaired-man-standing-looking-away-isolated-white-background_386167-8271.jpg?w=360",
      brand:"arrow",
      model:"dark blue black designed coat",
      price:"-/2999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5015.jpg?w=900&t=st=1688712501~exp=1688713101~hmac=3fbeeb48d5e774ed16dfeb2128a84f721db5c2a5d50bf235ff594d2896379c7d",
      brand:"us polo assn",
      model:"Blue jeans shirt ",
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-stylish-hipster-lambersexual-model_158538-18005.jpg?w=900&t=st=1688712547~exp=1688713147~hmac=089ef36b438e372fb9f10f5ccf76dc37a535e8b655f25a8aa5f3204a6efaa123",
      brand:"Guucio",
      model:"brown patternd shirt with brown tshirt",
      price:"-/1299"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1688712656~exp=1688713256~hmac=938383dc6b44d7aee4931455562114d050fe42a9372ac78becca07c6be69c316",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-young-man-posing-jacket-boots-jeans-sunglasses_374827-76.jpg?w=360",
      brand:"us polo assn",
      model:"brown bomber jacket ",
      price:"-/2099"
    },
    {
      image:"https://img.freepik.com/premium-photo/handsome-guy-with-fashion-look-wear-modern-clothes-isolated-white-casual_545934-24543.jpg?w=360",
      brand:"redFox",
      model:"v-neck dark violet sweatshirt",
      price:"-/699"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/young-handsome-hipster-man-isolated-white-studio-background-stylish-outfit-denim-shirt-trousers-hat-sunglasses-sitting-chair-hands-together-pose-smiling-happy-positive_285396-1509.jpg?w=360&t=st=1688712832~exp=1688713432~hmac=b79ca7e043c933e37258f038b5b8920d5c1bed07c0b13aebf48d54e70b933372",
      brand:"rabbit",
      model:"orange and blue coloured checks shirt",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/young-man-sitting-small-stool-against-white-wall_231208-1174.jpg?w=360&t=st=1688712867~exp=1688713467~hmac=ae853622b3a60ce6076b7d705894347c4c4f232a708ee016a0f448e0292012e4",
      brand:"us polo assn",
      model:"full sleeve light white smoked shirt ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/why-be-boring-when-you-can-make-statement-studio-shot-stylishly-dressed-young-man-posing-against-grey-background_590464-45393.jpg?w=740",
      brand:"redFox",
      model:"brown suit",
      price:"-/3299"
    },
    {
      image:"https://img.freepik.com/premium-photo/beautiful-brutal-tanned-hipster-man-black-shirt-glasses_149155-2568.jpg?w=360",
      brand:"armani",
      model:"blue coloured shirt",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/male-athlete-doing-fitness-training-workout-outside-gym_1328-4778.jpg?w=360&t=st=1688713013~exp=1688713613~hmac=6a4416b46e38f9691778a43b04200dcd4021554be45abd5e061b5bf9e99c31ac",
      brand:"vintage.co",
      model:"brown color hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260949.jpg?w=360&t=st=1688713069~exp=1688713669~hmac=deb8d586443898e38a1b881a35d91c63e804345c5af712a1838167951a62fc75",
      brand:"us polo assn",
      model:"full sleeve blue hoodie ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/young-man-white-sweatshirt-with-hood-sweatpants-sits-wooden-cube-blue-studio-background_105609-7718.jpg?w=360",
      brand:"netplay",
      model:"white full sleeve hoodie",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-young-african-man_23-2148854489.jpg?w=740&t=st=1688713125~exp=1688713725~hmac=128cba9b5a5c011f6f75a2e93a2ec45584082223334a7565b1d1205caf38cb00",
      brand:"armani",
      model:"brown full sleeve t-Shirt",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/medium-shot-young-man-wearing-black-hoodie_23-2149359862.jpg?w=360&t=st=1688713162~exp=1688713762~hmac=bfcf89504273201c4bfa9d4f22bbbac6bc6c23e971f0ed5c356989ae963dce45",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/close-up-portrait-attractive-male-model-color-flash-light_158595-5116.jpg?w=360&t=st=1688713226~exp=1688713826~hmac=d99a09c0c3ba4867bc01580b836bf3f1f42b812f9edaa9806c6a0fb2af9b0878",
      brand:"arrow",
      model:"brown coloured jacket",
      price:"-/1199"
    },
    {
      image:"https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-overcoat-posing-studio_158538-11452.jpg?w=360&t=st=1688713255~exp=1688713855~hmac=10644f3d00ca638404299a5ee0d17b21be888a3546b9304bdab7f136f674b2fd",
      brand:"rabbit",
      model:"white smoked coloured detective suit",
      price:"-/2399"
    },
    {
      image:"https://img.freepik.com/premium-photo/man-white-shirt-black-pants-is-posing-front-wooden-fence_887512-733.jpg?w=360",
      brand:"us polo assn",
      model:"full sleeve light white smoked hoodie",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/man-near-green-leaves-background_23-2147805544.jpg?w=360&t=st=1688713313~exp=1688713913~hmac=478db01aa443fea62518a67a3a14fb6b00364c13d60df040dce38e0b11fe1af4",
      brand:"redFox",
      model:"purple hoodie",
      price:"-/899"
    },
    {
      image:"https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?w=360&t=st=1688713379~exp=1688713979~hmac=aaf04e33c643d444be6a4b88c7448f9718f2e813fb1560b465ebdc9b4ee027b5",
      brand:"armani",
      model:"brown coloured pant",
      price:"-/1099"
    },
    {
      image:"https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1688713418~exp=1688714018~hmac=a4918754275100fab096b2d20d616e5a80d5da3d40ec9162501e1c0d36b2e468",
      brand:"vintage.co",
      model:"red chinos",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/businessman-wearing-black-pants-with-white-shirt_53876-102237.jpg?w=360&t=st=1688713454~exp=1688714054~hmac=70ca452c5bb030768648ef4083b343cdac435d22ebc1cc85e233423877446007",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/free-photo/male-suit-close-up-holding-coffee-hand_1303-10298.jpg?w=360&t=st=1688713528~exp=1688714128~hmac=1adcc993cc0c6ab49b1f3c0034f7cf419f62c01ad953d16033d7dcb01d594a25",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/white-t-shirt-men-s-basic-wear-full-body_53876-125248.jpg?w=360&t=st=1688713502~exp=1688714102~hmac=cb0da1f5efbceb95f6d67cbd0009c7fd29f34d332f47ca6387ee6de035f96690",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/close-up-man-s-business-pants_141438-2636.jpg?w=360",
      brand:"vintage.co",
      model:"black coloured hoodie",
      price:"-/999"
    },
    {
      image:"https://img.freepik.com/free-photo/full-portrait-smiling-walking-man-red-t-shirt-casuals-isolated-white-background_186202-4742.jpg?w=740&t=st=1688713570~exp=1688714170~hmac=2b371cf476784670e2477a7346098906e917260d6d499d5b738ae5a49d7f2db8",
      brand:"us polo assn",
      model:"blue coloured chinos ",
      price:"-/1399"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-portrait-pensive-handsome-man-posing-with-hands-pockets-isolated-gray-wall_171337-83308.jpg?w=360",
      brand:"netplay",
      model:"patterned suit pant",
      price:"-/1999"
    },
    {
      image:"https://img.freepik.com/free-photo/man-navy-jacket-jeans-streetwear_53876-108580.jpg?w=360&t=st=1688713605~exp=1688714205~hmac=d58d675d5ea6e5f0e501cdaf2c401da50758640a0461c9dc002505ac783bbd06",
      brand:"armani",
      model:"light blue jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/premium-photo/full-length-studio-portrait-casual-young-man-jeans-shirt-smiling-isolated-white-background_361425-3877.jpg?w=360",
      brand:"vintage.co",
      model:"black semi torned jeans",
      price:"-/1699"
    },
    {
      image:"https://img.freepik.com/free-photo/cool-guy-good-mood-posing-blue-background-jumping_197531-26875.jpg?w=900&t=st=1688712606~exp=1688713206~hmac=5c23665eb680c2ca110c7b4a5de6b2b6b5ab39bca5f8222f05cca9babb968d95",
      brand:"arrow",
      model:"orange coloured jacket with white-T",
      price:"-/1199"
    },
    
    
  ]

  export default mencards