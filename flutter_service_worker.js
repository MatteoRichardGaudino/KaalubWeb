'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a3e5b97ee2b0d6a2b73a4c92e303af83",
".git/config": "dcba145a6c43263e661c0e37ef02b03a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b05a485a40c23d96ff39466a3b750bf5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cff906bb5fdbf047a75e853a06866f1c",
".git/logs/refs/heads/main": "7d6cc7ae37e882daa8907b3893f3bbd0",
".git/logs/refs/heads/master": "46775aa34e460c3cde4e6a3816b078c3",
".git/logs/refs/remotes/kk/main": "c4de7adef65d1d2f8339f8ba02b39812",
".git/objects/01/b66fb7fa2a98f6cab8d10c498ac44dcfc49504": "4c1f3e6662ecd343edcfaa2ea15edf94",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/1e077b9de236f6cf5ac9087d14c5a95ba0de61": "85846da161c0d1afb09e88fac7fac5bb",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/4254eb68122c60c3fb0ec175da4fa4f95d67ad": "c2047bcc916023b7c1ab5d632ca2a97e",
".git/objects/0f/4e63b2fdd13c97943b07c01f8ebf268f3c8273": "3b519f86aaacac8238127b4b9ac67884",
".git/objects/11/d16b095f006352470984a381247d8d6df234c8": "7ecfb1ebcb2b0167953b632e0bbefa51",
".git/objects/12/7571537b43981aa56409645157759e24c2f39b": "671beb449e2725d83581e2a69e6f57e5",
".git/objects/13/dce678bd35ee914fddf211c8bfca2192851a38": "1a160b17ef5d40538cbeb7d507b65624",
".git/objects/17/b7861eb564bc7aa6cc7846cce78f086d5b2f48": "22bc7cd53ff3a5c2ca39adf120e31ee6",
".git/objects/18/ccb388ae8b5af4e83323f6e060d9d53d4f2ca8": "558ac76b95987fa66941ac4dca0168e4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/46fe100467aed499e7070a90db7a91fef11e29": "39185960c876f8484aaa18f0846c7933",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/21/d77a05477974628eb44a92e46c42c20475719d": "679a32868a06bf357dfb0e0f58ec74cf",
".git/objects/22/ddbaaddc48adb8263642dd1a9045fc76d00664": "2879b7c74ae71f066583ca411e962d83",
".git/objects/26/65298c42a170398249f058dba9f0456e85d51c": "aa830462c519807badb15e361568f4c3",
".git/objects/26/c4e079d7a1dc7c9a4c576536e60f9ac22f132a": "4510094f280d6380228f72a9ae1a93ef",
".git/objects/26/f3bcd0b02bc2d78f50c400f2bac782634f15ff": "dc3842e826b1e6d706a9afbc498fb7ef",
".git/objects/2b/6684e2ee19b44fe861e0d3fb1989ffb0baaddb": "11866ac6a874ea78c4067fa7d3482095",
".git/objects/2e/7a791f235f0d5bbe644738912a9c4090a152c0": "3cc58c705c88af8325c53c989815b385",
".git/objects/2f/1a37a4253bfb10fce0c61900f1f3d44c00aa43": "3faf231e4e4bf60fb423d7180e79338f",
".git/objects/2f/69ff7ced4c0624e87d9c150e4d523d6862221e": "61a51ae6e75e74a786d74c76561ad780",
".git/objects/30/bc7d60e155d2fc9a8d3f23bca51f34379f772f": "ee2aa6600eea835924c0ac1f5ca86d74",
".git/objects/30/d14c161f01450456398a2d438d90f20d97557b": "832d68f130b9f259648ecad02d038fc3",
".git/objects/32/38bdd495069c2d0e166a987521a74e660ab2ec": "b059ba501c2047db402609d280fd89e7",
".git/objects/32/96f0c5bc553c9c67d2385fa9ac0fadc07f6c30": "af5389dec9207bbaa115df32ee839d4e",
".git/objects/32/b5cdfd8c2e49ab1e2f7fb36ff12c5a83dac18f": "73f71398a1a98918155ae6011b2bb9d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/fd81a9d915d78e805c617398a5dbe6380731b0": "6e444f4c11b51497ff09bb69856ba6f7",
".git/objects/36/6cabcef2f25ea20f9526e7a0b95abc2d12ce1c": "3c136c4f9eba1bb782a3ef1836b80e02",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3d/94ef8f69e999c398c1d8a9bb564b02047929ce": "2e6dd04a0a461e15877ae3c4de47c20c",
".git/objects/3e/23f53297b1775c1ee23eb7d42b5cc8115b0d35": "056927db1ce4d4f4b1e917604bb86155",
".git/objects/3f/ea7ec080a4b8356540cae9ad21f1bf0969f316": "7a3d280df8d76bdc808cb3360f82faad",
".git/objects/43/2a9be5b3afe77dd4e4da647990ec0cfb8aeba7": "72b6c82d61e83ecc541ffdcdb8f21547",
".git/objects/4e/ca271b01a37676cbee19b52c890c8f40928852": "e23f83021b122372b0492defa24265a3",
".git/objects/4f/7ecdde52aec60c40bc8fd727b77ca440f54ab3": "5e4729f39900ac1e354de02ab297488c",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/d0e31acf0262d97d515fa8de2e45253bfa24e0": "3ab0caea1aefd3dd47b837a07a9154a7",
".git/objects/5e/0d6f7f826f4f9c8b7b50ad971795ef53d190cc": "93710059325756b9511e8bdf1be31e5b",
".git/objects/5f/430eea38e2fbfc1cc0df78fe7dfb478b6c3542": "0b543bbc9da4ca6860e985dffb7574ec",
".git/objects/60/a39ec299d8862bf355ffc600e3e45f6cef84cd": "8057713ca913f8a0ee4e40035da4f41c",
".git/objects/61/d9ad1cb4b43e97d9ce5b52c8fb03c6c0ac4cfe": "fb5166786503ac519d9a0fafe7855523",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/b0880b63117aba0bcc18b25cea66ce7560caab": "1a48de9af96be54f32cd1e1542ab64d9",
".git/objects/65/43052cd8203a4de6567d2b6f9854d99ea49d9f": "f32569afe15c4b23f3596b9442ee55ac",
".git/objects/65/77af30b66b2ab3becadf5da817ae9512de4e93": "4a2b82368620e094f0bab6e474814691",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/78/1fa0e870c967ed91feaac4be1df774739bcdd0": "9b17082cecef10e17dde9918a1e1979e",
".git/objects/7a/c3f8d0e85ca0774f15e0b592aa6c1a390bc5df": "97c83cf8bc67bc70e85d9e02bba76bde",
".git/objects/7b/51e850806a541ab8c435376acd871bdef3fff7": "1d23c0d71a55fcd828bdce3678ddb359",
".git/objects/80/a9f1c8f3b37e5470215cef84bfa5852261f877": "aa542e2e9fbe5252f6ef673f61c62a30",
".git/objects/84/e804530eb56cd1a3daa19340de864b728e4327": "9882c4e9ccd1709965805758874ad3e2",
".git/objects/85/8e01a0076a2f1231eb3ecaaf2c8d1f8dd3d7ea": "7c72b79c6d80a85e7fc148dba10848e9",
".git/objects/87/4e81e0f22dcccdef3ef24f183fdbf61bec91f2": "6d841bea3fd4085e538c2f7fd7feeebe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/91099e41fcde6be53ccf116e23f2ae48bca863": "c8b66f56700e2058ca1f9c1787897bc1",
".git/objects/8c/755fea135a3918896c5e11f62437b47c828d3c": "181aa642c859cf4592e897df4af4666b",
".git/objects/8d/2b541b1a5199d660076d77fd36b86bf793d25c": "7ef245644680d7a7bd9d140859d3667e",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/ba6ae0d07c3bb33c3a08dcb21885206951a6d5": "4ba9c3fbc3f3fd9a3e38e145dbdcde9c",
".git/objects/92/12492e372cccbfcc558161e72cbfc16680f340": "e07657b296b407dff51952b1a69c4f1e",
".git/objects/92/59527c7bc374cc5ce3f488e95721397e04b630": "a7ec6a3c43e4eb59ddbe629d280afe1b",
".git/objects/93/e5aabd14346c236c215f655e116e822ecec096": "7a708007e5ce23e7a3cb09966d9f8fa9",
".git/objects/95/f3a085e4c1ea65d1dad882b40579eac5d0ce19": "5d2a0787e62cc4c0af5b1e3113485348",
".git/objects/96/4ffe0c032f084aa0850899e16e7bcb41fadf57": "ce9aa00710bfd3c2ab28c15dc399f198",
".git/objects/96/a0093af74d13992c09b88af4e4046d77838b62": "4d3c2d9dfffaf5963869ad69ba3108e1",
".git/objects/98/933914a2773c055189b63c9795a0c10c38e99a": "fe90ca17ebc1eac69753eb30e38e7870",
".git/objects/9c/966d39a077f56a3bf4a02d2c58fd4508238bce": "d1d736a0cf39de37f807531b2220e29a",
".git/objects/a4/c4edc398067a0196346dc694fa40900400695f": "fcb975fb52367f6264f0f1e2d8720cf2",
".git/objects/a6/8fa29c28dd25e70fa158528c0c28023b493167": "c39b6934170579e87555a41b3dad1e3b",
".git/objects/ad/d12b0dbbbeaea6ea4da88c1e382cfb688be1a4": "d462e635391a743895e526e1d9b1c6c6",
".git/objects/ad/fbcb2682f2614a4d418f46b883251edbd36a12": "c6fdf6e5390179eb9a31fa0107bfa744",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/5820024889f5d2d64117e900f9e66de4aba1f9": "8ad5cdd595cfbaca1a0b3e6725e204db",
".git/objects/b0/7f4bfc24c103169a78318b523baefb438424cb": "81c7ae8886e1b26f72edda1da88e6bbb",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/a47a4a06685677c50ddf378944761682204266": "0174db2958149ef2ed97110965be7472",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c3/054962e2272ef183c9da771cbadf7cdc1d2002": "4993abf048613d202bd4eb2af43bcf1b",
".git/objects/c3/12587ac1c73d42a4545d90da4e4fdc6ac4708d": "8ddf24225004e55082ef0456d8ad5b81",
".git/objects/c9/3cc4897c78769d3e400c2b0cede7f6cbbe7903": "43af0bbb6a3f205e9e72414297e74af5",
".git/objects/ce/7a57e87760229ccc0fa6d9b89c41c55dfd62d3": "4fc971129cbab6bca6f104615a3b4608",
".git/objects/ce/d685046c4876dd72b1373e552df961a4fc79a7": "c7f17ee535ffccb8ce6cdf69f9c00e04",
".git/objects/d1/7dd9143fbcfdd99d77d39f66e84ed0304df9a0": "5ff1e0ba76839483d3c403b78a690cfd",
".git/objects/d3/a1cf169e527e3860fb4c3637bcbf296384a057": "9538ada9cea3176b7d4059a9bf162dd6",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/0c05b8f6a4da3c9b6e0b53ca9e78e0f6593846": "c6c467d93a32ad988fc8664685b162b9",
".git/objects/d6/69f4096db421f9d300986dda02562c894410ef": "858aec09a5f0f9c7217662f4312e2cfe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/44a7cd68dc2cb971e3cf67a42be91f3a5e1096": "8f2d8c3841a86dfc05e6e4891e0d7159",
".git/objects/dc/5ec5e2dba3b73b6a0e9004b2afb6a691a812e3": "b9008a95f0ce165596215cf9424d80e9",
".git/objects/dc/9e606ead16637078b2f40825488dddd406a0ce": "5ed998df31f5b5b27623c94dc9c8d187",
".git/objects/dc/ef98b748e276a179aafa2f62d51b9b656e93eb": "a77e0f8e8ad51efa95652c032f39fb1f",
".git/objects/e0/b1e6324ace69bb7cac1f76d373a3668c9c9497": "6fd4251e876c460e7212416f109ce0bd",
".git/objects/e1/c8d11e7342202c64e858ddd9d6761e35c1b0c4": "df9e47f1d251e11c00eed77df8c7b5b6",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/59d097ef96a05a988a1d573eaad2ef5548a3f8": "1bd7b5e85f29cb7bd2c56437e7881c7d",
".git/objects/ee/17b4b646506429169782f60db50499ef28a321": "a75157ca4821bab26fd709b742b0a7a7",
".git/objects/ee/f4193840667c7d6bf993a68c9a3c9e86dd70f9": "cf348fe889829ca88c46a0cdf91df96c",
".git/objects/f1/849300e57d8dbb03920f39529a7bcf99fc41a5": "f84ed36ecb19894293179c3021ef7458",
".git/objects/f4/77f5344bfdc948704dde0ad6b8a6f5a02c9bbd": "9b7d2437dd4a4c523d158986b730a0e7",
".git/refs/heads/main": "eda320a6140a8a9feba178771248ec39",
".git/refs/heads/master": "eda320a6140a8a9feba178771248ec39",
".git/refs/remotes/kk/main": "eda320a6140a8a9feba178771248ec39",
"assets/AssetManifest.bin": "9914deceddea045183da224593fa60d3",
"assets/AssetManifest.json": "ec775e7f23225745e29c9a70d0e84b22",
"assets/assets/candela-animazione.gif": "91ad08a0d2f90cf526dcc1e8734c6fc1",
"assets/assets/candela-spenta.png": "371f7a26f3d3df4c55e3cfad604cf495",
"assets/assets/cards/eyes/2%2520of%2520Eyes.png": "35a6d5ae50d090bae6e422f92aa6592f",
"assets/assets/cards/eyes/3%2520of%2520Eyes.png": "4c62ded245b24f6ab6cf2a87b0fe5daa",
"assets/assets/cards/eyes/4%2520of%2520Eyes.png": "68c8337f8d00572e790a9456037f5ed4",
"assets/assets/cards/eyes/5%2520of%2520Eyes.png": "f0c48bfbe3d1c1f47411a59bf8525d58",
"assets/assets/cards/eyes/6%2520of%2520Eyes.png": "fc3ba1b449cdc579dafa1388c77e3d79",
"assets/assets/cards/eyes/7%2520of%2520Eyes.png": "87e823ac02ba3135c317995a3cc41f0b",
"assets/assets/cards/eyes/Ace%2520of%2520Eyes.png": "b70d2549146a88599c608a58a3896079",
"assets/assets/cards/eyes/King%2520of%2520Eyes.png": "d3dee8462db988de3e223f4088c05237",
"assets/assets/cards/eyes/Knight%2520of%2520Eyes.png": "7e13e40883921ac74cea8cab0c4a3cae",
"assets/assets/cards/eyes/Page%2520of%2520Eyes.png": "a548e7aa8fae84ec087d2bde5705ec48",
"assets/assets/cards/hearts/2%2520of%2520Hearts.png": "890bf22cf60da6bcc7aeb58c99d457de",
"assets/assets/cards/hearts/3%2520of%2520Hearts.png": "225de74d6864c2ae727751f0313be308",
"assets/assets/cards/hearts/4%2520of%2520Hearts.png": "74b36a86bc03ad9dbdcedb2f4ce0d758",
"assets/assets/cards/hearts/5%2520of%2520Hearts.png": "6e5f4a74ccaf31a72c4c61dc90558d0f",
"assets/assets/cards/hearts/6%2520of%2520Hearts.png": "4cc60fd19c97773abe5d31edbb3d8df4",
"assets/assets/cards/hearts/7%2520of%2520Hearts.png": "a4a1e90c8fe2569dce6e52edf35cc719",
"assets/assets/cards/hearts/Ace%2520of%2520Hearts.png": "843af17d5d9fba6c4b14f04c4dba8d24",
"assets/assets/cards/hearts/King%2520of%2520Hearts.png": "941e9de8598d427ef99d045f95e77d0d",
"assets/assets/cards/hearts/Knight%2520of%2520Hearts.png": "1b24a64ee6d93dcdcd882512addd4a44",
"assets/assets/cards/hearts/Page%2520of%2520Hearts.png": "c745da918ffe04b5717b890774c1b88d",
"assets/assets/cards/mirrors/2%2520of%2520Mirrors.png": "967175ea35de2b73bb8b64876e9960c3",
"assets/assets/cards/mirrors/3%2520of%2520Mirrors.png": "b44d3c1bb4b5a5c98a3f6488bdf2c0fd",
"assets/assets/cards/mirrors/4%2520of%2520Mirrors.png": "d4b724dbc1fa83f3235ce47965a693b3",
"assets/assets/cards/mirrors/5%2520of%2520Mirrors.png": "d22d07c3ed936d837614b2af175871f8",
"assets/assets/cards/mirrors/6%2520of%2520Mirrors.png": "22262decc7f5ffbf07dbb4a8ffa3b097",
"assets/assets/cards/mirrors/7%2520of%2520Mirrors.png": "e62163c08ed2c9daa079cae02088eb9c",
"assets/assets/cards/mirrors/Ace%2520of%2520Mirrors.png": "e862a17465d77f0a1a0fb5c21e11ff22",
"assets/assets/cards/mirrors/King%2520of%2520Mirrors.png": "6d76f74356ce828a207f9a4d8fa09f98",
"assets/assets/cards/mirrors/Knight%2520of%2520Mirrors.png": "27b630714cf95d0df7b53669833b8d4e",
"assets/assets/cards/mirrors/Page%2520of%2520Mirrors.png": "6508c17e2cc2e57840c8ca69e66e845a",
"assets/assets/cards/spectres/2%2520of%2520Spectres.png": "7405c90cda6df71f1161d70cfae4d760",
"assets/assets/cards/spectres/3%2520of%2520Spectres.png": "8d1c9c58d0bba56e9f22bb547db3acb2",
"assets/assets/cards/spectres/4%2520of%2520Spectres.png": "22d4fc839edcb269be06ab36b0f11484",
"assets/assets/cards/spectres/5%2520of%2520Spectres.png": "e6da10d9acfe46125562b2a993043ca0",
"assets/assets/cards/spectres/6%2520of%2520Spectres.png": "70fddb37ba24a4ded7e52796b4e63f6e",
"assets/assets/cards/spectres/7%2520of%2520Spectres.png": "7b59877920f81a5c3fa442dc6f0bfe18",
"assets/assets/cards/spectres/Ace%2520of%2520Spectres.png": "db60147617113429593fa79c8b6f3201",
"assets/assets/cards/spectres/King%2520of%2520Spectres.png": "38000541c3143f663971bb75dc22279c",
"assets/assets/cards/spectres/Knight%2520of%2520Spectres.png": "fcd5fef4b33e76e450bd8017f8907d31",
"assets/assets/cards/spectres/Page%2520of%2520Spectres.png": "fcfd59d23ea85059991e61d9c7fb4e5d",
"assets/assets/carta-retro.png": "a4770ea826ca9e646322c2c41ddb0e6c",
"assets/assets/effects/exit_game.wav": "00bcfa87d2227cd8f71a3692ae1a3eef",
"assets/assets/effects/game_over_completo.wav": "9f1832e29e076e405251ccdadf12e1e0",
"assets/assets/effects/options_hover.wav": "a1429b0e983e20775bf74432a337ea9c",
"assets/assets/effects/options_selection.wav": "5b4b727384c576d18a750d2550b35c3b",
"assets/assets/effects/rules.wav": "e569b0745ed35f4a0d41fe56e645717f",
"assets/assets/effects/suono_accedi_pila_scarti.wav": "a97b61ba7a1dba56500da98d02843a2f",
"assets/assets/effects/suono_candele_che_si_accendono.wav": "68b479c61b5db5ff1edac6380651db7e",
"assets/assets/effects/suono_evoca_Asso.wav": "0c040fdb3b07d84bb52789d659077cd6",
"assets/assets/effects/suono_evoca_carta.wav": "a1bf116778eeaf83720aad6b5de20d7b",
"assets/assets/effects/suono_mettere_carta_nella_mano_del_demone.wav": "d8f9b408de5a43d2484059e1ae3efcc8",
"assets/assets/effects/suono_metti_carta_in_un_posto_qualsiasi.wav": "5abd768da82246ac5d0a2aab9b660d02",
"assets/assets/effects/suono_pesca_dal_mazzo_di_pesca.wav": "7e0d8c449346eee577600dc73edfc81f",
"assets/assets/effects/suono_scegli_carta_discard_pile.wav": "75a65f4e2365c1da3ca46b7ee7403c69",
"assets/assets/effects/suono_vittoria_completo.wav": "5d4b96438663f93b1749bead44c38e03",
"assets/assets/fonts/Sahitya-Bold.ttf": "385a3ea5fd9fe6da295bf2b46b4d9cd6",
"assets/assets/fonts/Sahitya-Regular.ttf": "7cd92bf9177ea8d398aedec07763d100",
"assets/assets/Main_Title_start.png": "7a3a6836a180c3cc8ef1d0fbc3dcfde8",
"assets/assets/mano-demone.png": "a4679830f51a3e66eda2d3030ca714a3",
"assets/assets/music/divinazione_game_compressed.mp3": "7ae02366cabee992f9fc684d050652ed",
"assets/assets/music/divinazione_maintitle_compressed.mp3": "65e1446593eaead66cbedef6ea59bdca",
"assets/FontManifest.json": "aa77a3610f8bbbd6ccb724012c4d7bd9",
"assets/fonts/MaterialIcons-Regular.otf": "b5a550cb61a572d2d490a494d0afbec6",
"assets/NOTICES": "7da43e2af4203d9a0e557a3aa75a2c85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "68afd24ade578dc3069a177b07b6d698",
"/": "68afd24ade578dc3069a177b07b6d698",
"main.dart.js": "ab9b6e123578e5d29ab1230581fe5d3d",
"manifest.json": "f04a57ebad8b4da71724a601c8670bb0",
"version.json": "e5da233236b7a0964e3fc50e8334e7ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
