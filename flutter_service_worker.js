'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "a9e986984b93edb32adcf438b9f45d91",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b53cd8acbd47c659e37f7901ce5f97b8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b13b8f8abde30f4cd124f90996793ff",
".git/logs/refs/heads/main": "ad38688d392d93b699e0ef52ed8c6ade",
".git/logs/refs/remotes/origin/main": "28fd1dd3ee13ef3ad13f9b294c651e39",
".git/objects/00/0626b398fbfe264a088992262cf5efc2ed7ef1": "73e4128d646dace571cce74c20739b43",
".git/objects/00/ca18384cc1e59a0b12f6cb3dd6f804d06036e2": "bdacff18273514283c2548e1f9e17806",
".git/objects/01/8b6f831e5a74082faccf1a4652bbbbed9cf051": "c98a13cfd7085fd2da76546bbf825ebf",
".git/objects/05/94b347f02598032f7b7048d040aae61244b81d": "b0eec150b6ee3e726db62db2cff20085",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/19c7beafa3615c4d93956e7e0c223efafae4e7": "589a852fe8bb400b7c74469a4b350ad7",
".git/objects/0e/552b3f84d69e5dcc2a4e48a6c3978d5e595a35": "778eccc195c816399a8898c526c3db0e",
".git/objects/11/139c9506eeb5d78de52d8f2ff89e669b912d27": "5e1728e0d5ebe3647510771560d7acfe",
".git/objects/13/d6591a295bbee95ef0e1d301ffd6191fb1562a": "45572365c53ff4c75f913c6c8dc5ca74",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/28/e424c4c7242451157d20b9655bf61023bbfa5b": "71040d94112bd3b91908228b5e34797c",
".git/objects/29/502f97f93e055a82913df937248989100aec7e": "716262239f304be9dd983581be0b0513",
".git/objects/2d/060ce030453e0b035a81049bbefe1212704bfc": "d59b60c2becee66d8309d77903e87cb8",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/39/7f8ad4f20c2bde74552f0fd0eee0f14efbda3b": "be4f3e800c7c036d1a126a29730ed95e",
".git/objects/3a/4c39ead8fdce15bd1a1cb7a20ee4aa6e7bc304": "2ea339d9091235a11c0bc4a2bdd52edf",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/3b/fd35431e43e6cc30409fd5e5b0de700ad04bea": "f7b47cc67316be57df235b50569fad2a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/3276993ca8c3d894f94dba2dbb06e0d3fd1951": "4c32b1eb1750391c39f0bcdbe5babdf1",
".git/objects/44/97f71d685d551ba6ee7dc82b32987508762276": "02459aac0e513e33dc1d8d1597b4037d",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/51/f914c9480524d8cdac38200d42f8e02c77665d": "20cbce15761fe10d0f89324b2286d191",
".git/objects/54/cc569ee95749b5e6e938eb249003f1a1f9f522": "6e0d46fe72b15d4f4b054046c8a490b0",
".git/objects/58/685f0f9b160027069aeba78d0f08db6287c543": "26f7c80b850d5545ba68df7ca0c6e8b6",
".git/objects/59/4665fd71a8a94321616f1a1fc85e38a349df9c": "d4422bb69614d1bf37a12fa5785cb5bb",
".git/objects/5b/9ef37e54317fcda12e3192106451fb72f274cf": "fa33db849081e9f1d4d53ff2828b0f77",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/63/feeb72df793a0ceb00603f48593e1eff5b6dd8": "9e32dd1b5d941ff2ae7ea27a358ddee3",
".git/objects/64/acb2462f56e9c64303144c4fc4167740ee1bc4": "de602e269e8e2d73189a76b2503410f9",
".git/objects/67/a551e13a5279e6f33f09af464560df051945f3": "1a167ecb07d8e13cdf38b7a0de095099",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/3b920d5bf34410ea8ebb72ef833aad4cce4780": "c35cd5cf6c7d7c75e0e1fde34922e3f5",
".git/objects/6e/b8965de2bd22cc32b4d0b7b22375e4110b6fbd": "d5f6957990d9203477a1291499b407c0",
".git/objects/70/06d2202fa939fe84f36bfcf67f5ee69bda714d": "ec0e3c688f24ca1a564e54fa52020083",
".git/objects/7a/19980b2fb4d5fde4240ebd3aff7c694717b067": "0325e396e3c1acfb2b26fa18f888fdc6",
".git/objects/7a/270733782f25d592490bf31d135da3fbccfca6": "1dcc5a4b30030e1a7820573c57df7b7c",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7a/bb0e821bdf8dab1515be3d3728d20a9479dc7d": "ea548647b55f954daa2b610a800bb05c",
".git/objects/7c/a1c9a9391d1c913338561b44f6e3f2b67ba54b": "4f2cf5445509e37e91227064b1ef4d95",
".git/objects/7d/2cb39522daeea24b777f3faa96490a0590ec11": "d93e9b1bd671bcccf8059a2d108c2ab9",
".git/objects/7e/4f12e68166dace8bbb1c6558fda5feba29da85": "de525febe74d57a31de598bf1475ba05",
".git/objects/83/dc6dfc3bfee063cbafce30dd9a46d5b8fa2eb6": "8a6565fb79200a56398b7a451dd6479e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/aa223df91a2edb2891e9d8e8e63044949dc38c": "0a79f7a0bf3647b08bd74bbb13fdedeb",
".git/objects/87/148dad93962307ec16d1e04cddef2f4d3a9a92": "ff220cc056477a779a8fab3c2cb004b8",
".git/objects/87/218e518a0d4ac26241aaa5cee16b5697be7bea": "95745373b87a5ce9d1d39c0499c9af76",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6653071aaca97feebb1269f2bbef6af5092369": "4d6279ea5b4122be0887fa92df0792b0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/47c95db369d5c7589d9d65cd23b4fdc20f0e8e": "f58d862bf02bf1421d593fdffbc6981a",
".git/objects/9a/b35b388da52d8df7e5fb3cb3b89083203cc0f4": "e07f7c6be6269333f4f75ad79b41afae",
".git/objects/a6/caef336f597cda220f201b902d408b9dc91905": "31badcdcfc8c6006eff31599bf156750",
".git/objects/a8/70d58bbbdba1e7a3fa55098833a5fae5cbf1d8": "b6b950553a452032375938590c8996df",
".git/objects/aa/5c9334ea78324e4b1ca77869438c17091e3549": "3df4a7944df81e3bc804cb8aafc90797",
".git/objects/ae/24eab36512897aad631112d56e6b16a5bc61e6": "6dcb5a99d40a6368201b5187b1246f9c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/91a029006aa64065442d1b338ca9e75b429b36": "a5f19c135f71f9ac6619b74552a96266",
".git/objects/b2/f050072eb4bf625383b1f244f2b792fef7fcd7": "92cfbf124bdd3dabd341146b90a23263",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/d83a3e2aa153b31a0d894b537342154effa96e": "40bffc3d02520aaaf89d31e6fef98153",
".git/objects/c8/2c2cb2e9a069bb38758194ecc461443878fe07": "fac21279daaed95e8c9ffe4661e725e2",
".git/objects/ce/83357ae6203161d93f55ba090df98e81a509c0": "880be6d5be148b7e6009edd9d12c57cf",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/e9b909c7cff0b4b2448f5b66aab7071d1b843e": "cc9c2441830fbe69219c41464c1efef6",
".git/objects/d1/9b260f6ea18b537bd32560d56643cd7a45c0bc": "f7ff48fbe685bd8fd5dcb0508e40566c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/9d3cdfe74235590a03f191dc22308bac0aa3c7": "4d58b610277aa35fcb8b688243a732b2",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/f861dc9c8b4130c43f42230369ced81f471707": "5d95eddda2b71eae3510da73ddac50a0",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/bad770f3746429c40ba42b8afdd181a7fc700f": "11677e8d5ae6a1c5418a1d6a276d7774",
".git/objects/e4/e4da51b8ba6951ebbfcd2e46025b1d96dd2029": "a5e7bb90bf1a4e74949b1d38c5f32345",
".git/objects/e9/4fc9fd97a14284bbe945e8aa2562849b00e30e": "03912cb839e89dcf14187f8bfcbf3572",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c5de2a1c97c6bbb222dc9f3d8d8877efa6d084": "bf473316a24c8af97f065f87c8c122ee",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ecc94a2940d28b4d59dcb2a514ba17d5457777": "eeda6ab34b742d7d88bd748bdfca14db",
".git/objects/f9/872500022a6bcfe15219dc73c61a83dc08a5f2": "0c4c86256b2e912bed1d424d46ecc3e1",
".git/objects/fc/b11f13f1deddd72f9a41720a7dae46329f2488": "1b82baa70e5af3413dc68efa8ad1df44",
".git/objects/fd/482a7cba4a44d66503a1e9a17f0e7d51eca344": "f9412db40667c32cc3072ad6da8134e1",
".git/refs/heads/main": "482de28a3e00f289a050537a2ff79f35",
".git/refs/remotes/origin/main": "482de28a3e00f289a050537a2ff79f35",
"assets/AssetManifest.bin": "27a71878e148b0420e96f2f9c2f71e5a",
"assets/AssetManifest.bin.json": "6b993f8a172291ad5eff1ad3e640dce0",
"assets/AssetManifest.json": "0b8731a5cb251776f814175b0ba65c91",
"assets/assets/fonts/circe/Circe-Bold.ttf": "22f16521a7d16c7f8342680cf30b46bd",
"assets/assets/fonts/circe/Circe-Light.ttf": "9fd3216596f21252abbdbc053769134e",
"assets/assets/fonts/circe/Circe-Thin.ttf": "8a6928dabfc92fdf4fa5fa4f53534cab",
"assets/assets/fonts/proxima_nova/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/proxima_nova/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/fonts/proxima_nova/ProximaNova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/images/aerium.jpg": "1cc46a5095ea0c7c487280dcd981d703",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/bequip_logistics.jpg": "d9a33516351b0bb9e7cadc83b8780c66",
"assets/assets/images/certificate1.jpg": "c287a2ee3d9ec954ba72859f66adba78",
"assets/assets/images/certificate2.jpg": "c183a7799090f725e947b2fbb0508394",
"assets/assets/images/chatApp.png": "1d9665e37bf8a6ada1a78885e79e3cbd",
"assets/assets/images/colossal_toons.jpg": "309de4edc7e7540a0717710523e07477",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/david_legend.png": "b01ae00f2e9b1c9f8acd2294fed944d4",
"assets/assets/images/david_legend_2.png": "4fe4eaad48d004e47c0b6f5dd02d1cf2",
"assets/assets/images/finopp.jpg": "e8242ed7f425c6937f87d3a5526e76c5",
"assets/assets/images/foodDe.png": "6ed86b77d05fb4f38bbaf793ba693535",
"assets/assets/images/foodybite.jpg": "15fa08d9eea454b52afcd280aa044083",
"assets/assets/images/hassan.png": "a6f81bc3000273f6e23def1f10744cec",
"assets/assets/images/hassanImage.png": "acaa7a779c9943580daa25d9092f1bd5",
"assets/assets/images/HassanKhanFinalCv.pdf": "0a93cf7235543a549af9da79779d7180",
"assets/assets/images/HassanKhanpdf.pdf": "a610bf2956ed732c9c21e4a4d33a1a00",
"assets/assets/images/hawkeyeTravel.png": "77aed317170923fa5ecfba9e2b0c9384",
"assets/assets/images/learn_upp.jpg": "45063d1af568d5f2ad55b3f6eb447233",
"assets/assets/images/login_catalog.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/nector.png": "38a9489bfa461111a1f7c0c3e4c9db15",
"assets/assets/images/onboarding_app.jpg": "3579b51a4590f083dd633d145196bd22",
"assets/assets/images/otp_package.jpg": "2a4d40fa2c2968e140a02b767002615e",
"assets/assets/images/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/images/vybz.jpg": "afc36c7d9f5cbaf04ca21d43cee72bce",
"assets/assets/screenshots/portfolio_1.gif": "18dd0909f3aba633013d389421334c87",
"assets/assets/screenshots/portfolio_2.gif": "4196cf51f9316273f9ef7bfefc97d20b",
"assets/assets/screenshots/portfolio_3.gif": "a485ce18b008accbc91075f7aa27e2e7",
"assets/assets/screenshots/portfolio_design_1.png": "7d6b918c406123f221b50e48feea493f",
"assets/assets/screenshots/portfolio_design_2.png": "711a86e370566ce01c1903db1aa4e794",
"assets/assets/screenshots/portfolio_design_3.png": "f24dd0da7633fba80106b2865358a785",
"assets/assets/screenshots/portfolio_mobile_1.gif": "6f5725083b4becfb8b77c2af45a7e165",
"assets/FontManifest.json": "bdd5ce6f199dd9c206f745254bec9bfd",
"assets/fonts/MaterialIcons-Regular.otf": "c734455b26d15fdb4b37d7593c8770a8",
"assets/NOTICES": "8a31f9f77d27bb2618125ed9d0b59e9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "68684f59ab487e85d631530c532235a7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8bbfd53ee1da642b8d95201faa6399b1",
"/": "8bbfd53ee1da642b8d95201faa6399b1",
"main.dart.js": "668cb2ff58fa23ad16585d4adf22d2d7",
"manifest.json": "8542b4849da903a211dc6140ab03c23b",
"version.json": "81f3f6cf046aa3fd935033fcd513a40e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
