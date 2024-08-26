import React , {useState,useEffect} from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
// import { useEffect } from 'react';

const News = (props)=> {

    // articles = [
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Issy Ronald, CNN",
    //         "title": "'God needs to come and explain it': How the football world reacted to Real Madrid's extraordinary Champions League semifinal victory",
    //          "description": "\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions League final on May 28.",
    //         "url": "https://www.cnn.com/2022/05/05/football/real-madrid-champions-league-reaction-liverpool-spt-intl/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504173124-11-champions-league-semifinal-real-madrid-manchester-city-super-tease.jpg",
    //         "publishedAt": "2022-05-05T10:06:14Z",
    //         "content": "(CNN)\"We have a score to settle,\" Liverpool star Mo Salah tweeted after Real Madrid staged an extraordinary late comeback against Manchester City to set up a clash with the Reds in the Champions Leag… [+2830 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Esha Mitra, Rhea Mogul",
    //         "title": "A 13-year-old girl told the police she had been gang-raped. Then a police officer allegedly raped her",
    //         "description": "A 13-year-old girl who was allegedly gang-raped by four men in India, was allegedly raped again by a police officer after she tried to seek his help in reporting the initial attack.",
    //         "url": "https://www.cnn.com/2022/05/05/india/india-rape-teenager-police-arrested-intl-hnk/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220505013803-lalitapur-india-map.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2022-05-05T09:58:01Z",
    //         "content": "A 13-year-old girl who was allegedly gang-raped by four men in India, was allegedly raped again by a police officer after she tried to seek his help in reporting the initial attack.\r\nAuthorities in U… [+4395 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Reuters",
    //         "title": "Turkey's inflation hits two-decade high of 70%",
    //         "description": "Turkey's annual inflation jumped to 69.97% in April, above forecast and at a two-decade high, according to data on Thursday, fueled by the Russia-Ukraine conflict and rising energy and commodity prices after last year's lira crash.",
    //         "url": "https://www.cnn.com/2022/05/05/economy/turkey-inflation-soars/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220505053006-istanbul-shooppers-0406-super-tease.jpg",
    //         "publishedAt": "2022-05-05T09:37:48Z",
    //         "content": "IstanbulTurkey's annual inflation jumped to 69.97% in April, above forecast and at a two-decade high, according to data on Thursday, fueled by the Russia-Ukraine conflict and rising energy and commod… [+1030 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Ben Church",
    //         "title": "Chris Paul masterclass inspires Phoenix Suns to 2-0 lead in NBA playoffs",
    //         "description": "NBA veteran Chris Paul led the Phoenix Suns to victory against the Dallas Mavericks in the NBA playoffs on Wednesday in his quest for his first NBA championship.",
    //         "url": "https://www.cnn.com/2022/05/05/sport/chris-paul-phoenix-suns-nba-playoff-spt-intl/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220505044755-02-chris-paul-0504.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2022-05-05T09:33:40Z",
    //         "content": "NBA veteran Chris Paul led the Phoenix Suns to victory against the Dallas Mavericks in the NBA playoffs on Wednesday in his quest for his first NBA championship.\r\nPaul, who turns 37 on Friday, racked… [+2470 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Reuters",
    //         "title": "Shell posts record quarterly profit of $9 billion",
    //         "description": "Shell on Thursday reported a record first-quarter profit of $9.13 billion, boosted by higher oil and gas prices, stellar refining profits and the strong performance of its trading division.",
    //         "url": "https://www.cnn.com/2022/05/05/investing/shell-earnings-record-profit/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220505051920-02-shell-refinery-file-04292021-super-tease.jpg",
    //         "publishedAt": "2022-05-05T09:25:29Z",
    //         "content": "LondonShell on Thursday reported a record first-quarter profit of $9.13 billion, boosted by higher oil and gas prices, stellar refining profits and the strong performance of its trading division.\r\nTh… [+2872 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Melissa Alonso and Christina Maxouris, CNN",
    //         "title": "Massachusetts child protective system failed missing 7-year-old Harmony Montgomery, state office says",
    //         "description": "Massachusetts state officials involved in the welfare case of Harmony Montgomery, the 7-year-old girl last seen in 2019, failed to prioritize her well-being and safety throughout her life, according to a report issued Wednesday.",
    //         "url": "https://www.cnn.com/2022/05/05/us/harmony-montgomery-massachusetts-report/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220105134350-harmony-montgomery-missing-super-tease.jpg",
    //         "publishedAt": "2022-05-05T09:12:42Z",
    //         "content": "(CNN)Massachusetts state officials involved in the welfare case of Harmony Montgomery, the 7-year-old girl last seen in 2019, failed to prioritize her well-being and safety throughout her life, accor… [+7532 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Melanie Radzicki McManus, CNN",
    //         "title": "Rock climbing brings unexpected benefits",
    //         "description": "Rock climbing may seem like a niche sport, possibly one fraught with danger. After all, it involves scaling the side of a cliff or simulated rock wall. But experts say it offers participants a wide variety of physical and mental health benefits that are not a…",
    //         "url": "https://www.cnn.com/2022/05/05/health/rock-climbing-benefits-wellness/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220421201315-01-rock-climber-file-072221-super-tease.jpg",
    //         "publishedAt": "2022-05-05T08:20:50Z",
    //         "content": "(CNN)Rock climbing may seem like a niche sport, possibly one fraught with danger. After all, it involves scaling the side of a cliff or simulated rock wall. But experts say it offers participants a w… [+6279 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "By Jacopo Prisco, CNN",
    //         "title": "This solar-powered plane could stay in the air for months",
    //         "description": "Solar Impulse 2 circumnavigated the Earth without using a drop of fuel. Now, Skydweller Aero aims to use the plane to create the world's first commercially viable \"pseudo-satellite.\"",
    //         "url": "https://www.cnn.com/travel/article/skydweller-solar-powered-plane-solar-impulse-climate-scn-spc-intl/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504141537-restricted-02-skydweller-solar-impulse-story-card-super-tease.jpg",
    //         "publishedAt": "2022-05-05T07:49:15Z",
    //         "content": "(CNN) In 2016, a bizarre-looking plane, covered with more than 17,000 solar panels, showed the world a glimpse of the future of flight. With the wingspan of a Boeing 747, but weighing only as much as… [+5707 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Jacqui Palumbo, CNN",
    //         "title": "The internet's famous dancing baby from 1996 is getting a new look",
    //         "description": "If you were born before 1990, you may remember the 3D graphic of an almost-naked baby that danced on a loop to become one of the internet's earliest viral phenomenons. The strange-yet-sassy \"Dancing Baby\" began spreading via forwarded email chains in 1996 bef…",
    //         "url": "https://www.cnn.com/style/article/dancing-baby-meme-nft/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504125439-01-dancing-baby-remix-super-tease.jpg",
    //         "publishedAt": "2022-05-05T07:32:34Z",
    //         "content": "arts\r\nIf you were born before 1990, you may remember the 3D graphic ofan almost-naked baby that danced on a loop to become one of the internet's earliest viral phenomenons. The strange-yet-sassy \"Dan… [+5815 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Elizabeth Wolfe, Amara Walker and Jade Gordon, CNN",
    //         "title": "Search for Alabama corrections officer and inmate enters 7th day as officials piece together why they disappeared",
    //         "description": "Investigators are pleading for Alabama corrections official Vicky White to turn herself in as the search for her and the inmate she disappeared, Casey White, with enters its seventh day.",
    //         "url": "https://www.cnn.com/2022/05/05/us/alabama-vicky-white-casey-white-search-thursday/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220501071557-vicki-white-casey-white-super-tease.jpg",
    //         "publishedAt": "2022-05-05T07:14:08Z",
    //         "content": "(CNN)Investigators are pleading for Alabama corrections official Vicky White to turn herself in as the search for her and the inmate she disappeared with enters its seventh day. \r\n\"Vicky, you've been… [+6562 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Jackie Wattles, CNN Business",
    //         "title": "SpaceX's jam-packed schedule continues with another astronaut return",
    //         "description": "Three NASA astronauts and a European astronaut are returning home from the International Space Station, capping off their six-month mission during which they worked alongside Russian cosmonauts and hosted the first all-private crew to visit the orbiting outpo…",
    //         "url": "https://www.cnn.com/2022/05/05/tech/spacex-crew-3-nasa-undock-scn/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220505012300-01-spacex-crew3-undock-0505-super-tease.jpg",
    //         "publishedAt": "2022-05-05T05:29:13Z",
    //         "content": "New York (CNN Business)Three NASA astronauts and a European astronaut are returning home from the International Space Station, capping off their six-month mission during which they worked alongside R… [+7271 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": null,
    //         "title": "CNN speaks to the Ukrainian oligarch helping fund fight against Putin",
    //         "description": "CNN's Nic Robertson speaks to Ukrainian oligarch Dmitry Firtash, a major contributor to the war effort against Russia, who is facing extradition to the US.",
    //         "url": "https://www.cnn.com/videos/business/2022/05/05/ukrainian-oligarch-dmitry-firtash-robertson-pkg-ovn-intl-vpx.cnn",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220505003801-dmitry-firtash-thumb-robertson-pkg-vpx-super-tease.jpg",
    //         "publishedAt": "2022-05-05T05:03:44Z",
    //         "content": ""
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "By \u003Ca href=\"/profiles/helen-regan\"\u003EHelen Regan\u003C/a\u003E and \u003Ca href=\"/profiles/andrew-raine\"\u003EAndrew Raine\u003C/a\u003E, CNN",
    //         "title": "Russia's war in Ukraine",
    //         "description": "A Ukrainian commander at the Azovstal steel plant said there are \"bloody battles\" unfolding with Russian forces inside the complex after they breached the perimeter. Follow here for live updates.",
    //         "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-05-05-22/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504143212-azovstal-mariupol-ukraine-steel-plant-blurred-super-tease.jpg",
    //         "publishedAt": "2022-05-05T04:03:15Z",
    //         "content": "A Ukrainian commander at the Azovstal steel plant in Mariupol said there are \"bloody battles\" unfolding with Russian forces inside the complex after they breached the perimeter, even as Russia said i… [+2017 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Mary Kay Mallonee",
    //         "title": "Cawthorn addresses video released by opposition group showing him naked in bed 'being crass'",
    //         "description": "An opposition group that is actively campaigning against Rep. Madison Cawthorn has released a video clip appearing to show the North Carolina Republican naked in bed and, as Cawthorn described it, \"being crass with a friend\" and \"acting foolish.\"",
    //         "url": "https://www.cnn.com/2022/05/04/politics/cawthorn-response-opposition-group-video/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220504224551-03-cawthorn-response.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2022-05-05T03:27:03Z",
    //         "content": "An opposition group that is actively campaigning against Rep. Madison Cawthorn has released a video clip appearing to show the North Carolina Republican naked in bed and, as Cawthorn described it, be… [+3281 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Text by Lilit Marcus, CNN; Video by Max Burnell, CNN",
    //         "title": "How to build a runway out of solid ice",
    //         "description": "Just about everything that supports human life on Antarctica must be brought in from elsewhere, usually by aircraft. And in order for that aircraft to have a place to land somebody has to construct a runway out of solid ice.",
    //         "url": "https://www.cnn.com/travel/article/ice-runway-antarctica-intl-hnk/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220404092705-wolfs-fang-runway-super-tease.jpg",
    //         "publishedAt": "2022-05-05T02:27:48Z",
    //         "content": "Text by Lilit Marcus, CNN; Video by Max Burnell, CNNPublished 5th May 2022\r\n(CNN) Just about everything that supports human life on Antarctica must be brought in from elsewhere, usually by aircraft. … [+7207 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Dakin Andone",
    //         "title": "Some abortion clinics are preparing for more out-of-state patients if Roe v. Wade is overturned",
    //         "description": "Abortion clinics in states likely to maintain access to the procedure are preparing for a potential influx of out-of-state patients following the report of a leaked draft of a Supreme Court majority opinion that would overturn Roe v. Wade.",
    //         "url": "https://www.cnn.com/2022/05/04/us/abortion-out-of-state-patients-roe-v-wade/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220504130235-01-jackson-womens-health-organization-0503.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2022-05-05T01:05:21Z",
    //         "content": "Abortion clinics in states likely to maintain access to the procedure are preparing for a potential influx of out-of-state patients following the report of a leaked draft of a Supreme Court majority … [+6701 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Opinion by Alice Stewart",
    //         "title": "Opinion: Conservatives held our noses and voted for Trump. Reversing Roe would be our reward",
    //         "description": "\"As a pro-life social conservative, I received my fair share of criticism for supporting Donald Trump for president,\" writes commentator Alice Stewart. \"But I focused on the value of lifetime appointments to the high court that would elevate jurists who belie…",
    //         "url": "https://www.cnn.com/2022/05/04/opinions/supreme-court-abortion-conservatives-roe-stewart/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220221215729-march-for-life-closeup-file-01202022-super-tease.jpg",
    //         "publishedAt": "2022-05-05T00:08:07Z",
    //         "content": "Alice Stewart is a CNN Political Commentator and board member at the John F. Kennedy Institute of Politics at Harvard University. The views expressed in this commentary are her own. Read more opinion… [+4687 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Raja Razek, CNN",
    //         "title": "Alabama church known for role in voting rights movement is on the list of most endangered historic places",
    //         "description": "A Selma, Alabama, church with historic ties to the 1960s voting rights movement has landed on the 2022 Most Endangered Places list -- because of termites.",
    //         "url": "https://www.cnn.com/2022/05/04/us/selma-alabama-church-most-endangered-historic-places-list/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504150051-01-brown-chapel-african-methodist-episcopal-church-super-tease.jpg",
    //         "publishedAt": "2022-05-05T00:07:35Z",
    //         "content": "(CNN)A Selma, Alabama, church with historic ties to the 1960s voting rights movement has landed on the 2022 Most Endangered Places list -- because of termites.\r\nBrown Chapel African Methodist Episcop… [+1993 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Brian Fung, CNN",
    //         "title": "New York City pension funds sue Activision Blizzard, seeking records on CEO Bobby Kotick",
    //         "description": "New York City pension fund officials sued Activision Blizzard late last month in a bid to force the company to disclose records that may uncover whether CEO Bobby Kotick breached his fiduciary duty to investors, according to a newly released copy of the compl…",
    //         "url": "https://www.cnn.com/2022/05/04/tech/activision-blizzard-lawsuit-kotick-new-york/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504194620-bobby-kotick-file-070621-super-tease.jpg",
    //         "publishedAt": "2022-05-04T23:56:20Z",
    //         "content": "(CNN Business)New York City pension fund officials sued Activision Blizzard late last month in a bid to force the company to disclose records that may uncover whether CEO Bobby Kotick breached his fi… [+2627 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Holmes Lybrand and Hannah Rabinowitz, CNN",
    //         "title": "Two men accused of attacking DC Officer Michael Fanone on Jan. 6 set to enter into plea agreements this week",
    //         "description": "Two of the alleged assailants of former DC police Officer Michael Fanone have plea agreement hearings scheduled before the DC District Court this week, bringing a partial close to one of the most high-profile assault cases of the January 6, 2021, US Capitol r…",
    //         "url": "https://www.cnn.com/2022/05/04/politics/michael-fanone-case-assault-plea-agreements/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210617121330-0617-officerfanone-super-tease.jpg",
    //         "publishedAt": "2022-05-04T23:23:19Z",
    //         "content": "(CNN)Two of the alleged assailants of former DC police Officer Michael Fanone have plea agreement hearings scheduled before the DC District Court this week, bringing a partial close to one of the mos… [+2465 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Natasha Bertrand and Paul LeBlanc, CNN",
    //         "title": "Biden asks Congress to help provide Afghan refugees a pathway to become US residents",
    //         "description": "President Joe Biden has asked Congress to provide tens of thousands of Afghan refugees with a pathway to become legal permanent residents of the United States, according to a proposal included in the supplemental budget request he sent to lawmakers last week.",
    //         "url": "https://www.cnn.com/2022/05/04/politics/white-house-afghan-refugees-ukraine-aid-bill/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504174853-joe-biden-050422-super-tease.jpg",
    //         "publishedAt": "2022-05-04T22:41:15Z",
    //         "content": "Washington (CNN)President Joe Biden has asked Congress to provide tens of thousands of Afghan refugees with a pathway to become legal permanent residents of the United States, according to a proposal… [+2562 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Nimi Princewill, CNN",
    //         "title": "'The world has not forgotten us': Nigeria's Buhari thankful for UN chief's visit amid war in Ukraine",
    //         "description": "Nigeria's President Muhammadu Buhari has thanked UN Secretary-General Antonio Guterres for his visit to the country, saying that he is grateful the West African nation hasn't been forgotten amid the Russia-Ukraine conflict.",
    //         "url": "https://www.cnn.com/2022/05/04/africa/un-guterres-first-visit-nigeria-intl/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504133001-buhari-guterres-0504-super-tease.jpg",
    //         "publishedAt": "2022-05-04T22:05:36Z",
    //         "content": "Abuja, Nigeria (CNN)Nigeria's President Muhammadu Buhari has thanked UN Secretary-General Antonio Guterres for his visit to the country, saying that he is grateful the West African nation hasn't been… [+3677 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Hannah Rabinowitz, Holmes Lybrand and Katelyn Polantz, CNN",
    //         "title": "Top Oath Keepers member says he overheard extremist group's leader trying to connect with Trump after US Capitol riot",
    //         "description": "A top member of the Oath Keepers said in court on Wednesday that he overheard the leader of the group, Stewart Rhodes, trying and failing to get in touch with then-President Donald Trump after the January 6, 2021, attack on the US Capitol.",
    //         "url": "https://www.cnn.com/2022/05/04/politics/oath-keepers-wilson-rhodes/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504155710-01-us-capitol-breech-file-010621-super-tease.jpg",
    //         "publishedAt": "2022-05-04T21:43:53Z",
    //         "content": "(CNN)A top member of the Oath Keepers said in court on Wednesday that he overheard the leader of the group, Stewart Rhodes, trying and failing to get in touch with then-President Donald Trump after t… [+3715 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Sharif Paget, CNN",
    //         "title": "Multiple people trapped and injured at scene of a partial building collapse at a former power plant in South Boston",
    //         "description": "One person has sustained life-threatening injuries and multiple people are trapped following a partial building collapse at the Edison Power Plant building in South Boston, Police Department spokesman Andre Watson said Wednesday.",
    //         "url": "https://www.cnn.com/2022/05/04/us/boston-power-plant-site-collapse/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504160727-01-boston-power-plant-floor-collapse-super-tease.jpg",
    //         "publishedAt": "2022-05-04T21:15:35Z",
    //         "content": "(CNN)One person has sustained life-threatening injuries and multiple people are trapped following a partial building collapse at the Edison Power Plant building in South Boston, Police Department spo… [+546 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Stephanie Elam, CNN",
    //         "title": "Officials worry Southern California won't have enough water to get through summer without unprecedented cuts",
    //         "description": "\"I don't want anybody to turn on the faucet and not have water,\" said one Southern California water manager.",
    //         "url": "https://www.cnn.com/2022/05/04/us/california-drought-water-restrictions-climate/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504162227-01-california-drought-water-restrictions-climate-super-tease.jpg",
    //         "publishedAt": "2022-05-04T20:54:58Z",
    //         "content": "Why the Great American Lawn is terrible for the West's water crisis\r\nLake Powell officials face an impossible choice in the West's megadrought: Water or electricity\r\nLake Mead plummets to unfathomabl… [+290 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Clare Foran and Melanie Zanona, CNN",
    //         "title": "New audio: McCarthy said 25th Amendment 'takes too long' and wanted to reach out to Biden after January 6 attack",
    //         "description": "House Republican leader Kevin McCarthy discussed the 25th Amendment on a call with GOP leadership days after the January 6, 2021, attack on the Capitol and said the process \"takes too long,\" according to an audio recording obtained by two New York Times repor…",
    //         "url": "https://www.cnn.com/2022/05/04/politics/mccarthy-audio-25th-amendment-biden/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220426160656-kevin-mccarthy-0121-file-super-tease.jpg",
    //         "publishedAt": "2022-05-04T20:49:14Z",
    //         "content": "(CNN)House Republican leader Kevin McCarthy discussed the 25th Amendment on a call with GOP leadership days after the January 6, 2021, attack on the Capitol and said the process \"takes too long,\" acc… [+4938 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Ryan Nobles, Annie Grayer and Zachary Cohen, CNN",
    //         "title": "Donald Trump Jr. met with the House January 6 committee on Tuesday",
    //         "description": "Donald Trump Jr., the son of former President Donald Trump, met on Tuesday with the House select committee investigating the January 6 insurrection, according to two sources familiar with the meeting.",
    //         "url": "https://www.cnn.com/2022/05/04/politics/donald-trump-jr-january-6-committee/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220411154647-donald-trump-jr-0227-super-tease.jpg",
    //         "publishedAt": "2022-05-04T20:34:52Z",
    //         "content": "(CNN)Donald Trump Jr., the son of former President Donald Trump, met on Tuesday with the House select committee investigating the January 6 insurrection, according to two sources familiar with the me… [+1408 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Review by Brian Lowry, CNN",
    //         "title": "'Moon Knight' took Marvel in a different orbit, but it didn't rise to the occasion",
    //         "description": "Despite the show's ambition and visual flair, \"Moon Knight\" felt like a creative misfire.",
    //         "url": "https://www.cnn.com/2022/05/04/entertainment/moon-knight-finale-review/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220329084335-02-moon-knight-handout-super-tease.jpeg",
    //         "publishedAt": "2022-05-04T20:29:28Z",
    //         "content": "The following contains spoilers about the \"Moon Knight\" finale.\r\n (CNN)After four series featuring characters seen in the \"Avengers\" franchise, \"Moon Knight\" marked Marvel's first attempt at a true o… [+2905 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Ivana Kottasová, Petro Zadorozhnyy and Lauren Said-Moorhouse, CNN",
    //         "title": "Russia's attacks on Ukraine's supply lines are intensifying. Ukraine's national railway hasn't buckled",
    //         "description": "The smell of burnt wire and rubber still lingered in the air around the railway power station on the outskirts of Lviv Wednesday morning, hours after the blaze was extinguished. A group of investigators was collecting debris from the Russian rockets that stru…",
    //         "url": "https://www.cnn.com/2022/05/04/europe/ukraine-russia-railways-intl/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504154141-02-lviv-railways-power-station-super-tease.jpg",
    //         "publishedAt": "2022-05-04T20:27:59Z",
    //         "content": "Lviv, Ukraine (CNN)The smell of burnt wire and rubber still lingered in the air around the railway power station on the outskirts of Lviv Wednesday morning, hours after the blaze was extinguished. A … [+5331 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Peter Bergen, CNN National Security Analyst",
    //         "title": "Retired US major general: What it will take for the Ukrainians to win",
    //         "description": "Peter Bergen interviews former commander of the US Special Operations Command in Europe, retired US Army Maj. Gen. Mike Repass, who says the international community has to greatly increase its support for Ukraine if the embattled nation is ever going to be ab…",
    //         "url": "https://www.cnn.com/2022/05/04/opinions/bergen-repass-ukraine-interview/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220422111820-01-mariupol-042122-super-tease.jpg",
    //         "publishedAt": "2022-05-04T20:20:15Z",
    //         "content": "Peter Bergen is CNN's national security analyst, a vice president at New America and a professor of practice at Arizona State University. His forthcoming paperback is \"The Cost of Chaos: The Trump Ad… [+11696 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Ashley Strickland, CNN",
    //         "title": "Largest known North American cave art remained hidden for more than 1,000 years",
    //         "description": "Massive Native American drawings, unseen in an Alabama cave for more than 1,000 years, have been revealed thanks to 3D imaging. It's the largest known cave art ever discovered in North America.",
    //         "url": "https://www.cnn.com/style/article/largest-native-american-cave-art-scn/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504111409-04-largest-native-american-cave-art-super-tease.jpg",
    //         "publishedAt": "2022-05-04T20:18:57Z",
    //         "content": "arts\r\nMassive Native American drawings -- which remained unseen in an Alabama cave for more than 1,000 years -- have been unveiled by a team of scientists. It's the largest known cave art ever discov… [+6966 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Jennifer Agiesta, Ariel Edwards-Levy",
    //         "title": "CNN Poll: Most Americans have a dismal view of the US economy",
    //         "description": "The US public's view of the nation's economy is the worst it's been in a decade, a new CNN Poll conducted by SSRS finds, with many Americans also saying they feel financial strain in their own lives.",
    //         "url": "https://www.cnn.com/2022/05/04/politics/cnn-poll-economy-biden-approval/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220504154726-inflation-shopping-file.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2022-05-04T20:00:12Z",
    //         "content": "The US publics view of the nations economy is the worst its been in a decade, a new CNN Poll conducted by SSRS finds, with many Americans also saying they feel financial strain in their own lives.\r\nT… [+6942 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Analysis by Chris Cillizza, CNN Editor-at-large",
    //         "title": "Why Republicans are ignoring the substance of the leaked Roe v. Wade draft opinion",
    //         "description": "The real issue, to hear Republicans tell it, isn't that the Supreme Court could overturn Roe v. Wade, according to a copy of the draft opinion written by Justice Samuel Alito.",
    //         "url": "https://www.cnn.com/2022/05/04/politics/republicans-roe-v-wade-abortion-leak-real-issue/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220503004720-supreme-court-abortion-protest-0502-super-tease.jpg",
    //         "publishedAt": "2022-05-04T19:57:51Z",
    //         "content": "THE POINT -- NOW ON YOUTUBE! \r\nIn each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Ryan Bergeron, CNN",
    //         "title": "Help moms around the world with these Mother's Day ways to give back",
    //         "description": "Mother's Day is a chance to celebrate, pamper and shower moms with love. But for many moms around the world, this Mother's Day will still see them struggling to make ends meet. If your mom is one of those who \"doesn't need a gift\" (just her baby), here are a …",
    //         "url": "https://www.cnn.com/2022/05/04/us/iyw-giving-back-mothers-day-donations-wellness/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220502143158-ukraine-mother-daughter-super-tease.jpg",
    //         "publishedAt": "2022-05-04T19:45:11Z",
    //         "content": "(CNN)Mother's Day is a chance to celebrate, pamper and shower moms with love. But for many moms around the world, this Mother's Day will still see them struggling to make ends meet. If your mom is on… [+5223 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Tim Lister, Paul P. Murphy",
    //         "title": "Drone footage shows how Russians destroyed one Ukrainian town in savage battle",
    //         "description": "A 22-minute video shot by a surveillance drone over the Ukrainian town of Popasna has illustrated the stunning destruction being inflicted on settlements across the eastern regions of Luhansk and  Donetsk.",
    //         "url": "https://www.cnn.com/2022/05/04/europe/ukraine-drone-footage-popasna-intl/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220504143225-01-popasna-drone-footage.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2022-05-04T19:17:40Z",
    //         "content": "A 22-minute video shot by a surveillance drone over the Ukrainian town of Popasna has illustrated the stunning destruction being inflicted on settlements across the eastern regions of Luhansk and Don… [+4090 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Tina Burnside, CNN",
    //         "title": "An 8-month-old died in a hot car after her father's arrest, Georgia police say",
    //         "description": "The father of an 8-month-old girl who died after she was left inside of a hot car has been charged with second-degree murder, Georgia Bureau of Investigation officials said during a news conference on Wednesday.",
    //         "url": "https://www.cnn.com/2022/05/04/us/georgia-child-car-death-during-arrest/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504120038-snellville-pd-file-super-tease.jpg",
    //         "publishedAt": "2022-05-04T19:15:08Z",
    //         "content": "(CNN)The father of an 8-month-old girl who died after she was left inside of a hot car has been charged with second-degree murder, Georgia Bureau of Investigation officials said during a news confere… [+1426 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Matt Egan, CNN Business",
    //         "title": "Here's how higher rates will impact you",
    //         "description": "The Covid era of free money has come to an end.",
    //         "url": "https://www.cnn.com/2022/05/04/economy/fed-may-interest-rates/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220127113105-restricted-us-house-for-sale-mortgage-rates-super-tease.jpg",
    //         "publishedAt": "2022-05-04T19:14:16Z",
    //         "content": "This is an updated version of a story that ran on March 17, 2022.\r\nNew York (CNN Business)The Covid era of free money is over, and the Federal Reserve is stepping up its fight against inflation.\r\nFed… [+5974 chars]"
    //       },
    //       {
    //         "source": {
    //           "id": "cnn",
    //           "name": "CNN"
    //         },
    //         "author": "Jennifer Hansler, CNN",
    //         "title": "Family members of Americans detained abroad gather to raise awareness and seek meeting with Biden",
    //         "description": "Family members of Americans imprisoned around the world gathered near the White House on Wednesday in the hope of getting a meeting with President Joe Biden and to raise awareness about the plight of wrongful detainees.",
    //         "url": "https://www.cnn.com/2022/05/04/politics/bring-our-families-home-campaign-white-house/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220504131709-02-families-of-detained-prisoners-0504-super-tease.jpg",
    //         "publishedAt": "2022-05-04T19:06:02Z",
    //         "content": "Washington (CNN)Family members of Americans imprisoned around the world gathered near the White House on Wednesday in the hope of getting a meeting with President Joe Biden and to raise awareness abo… [+3419 chars]"
    //       }
    //     ]

  
    // constructor(props){
    // super();
    // state = {
    //     articles: [],
    //     page:1,
    //     totalResults:0
    // }

    const [articles , setArticles] = useState([]);
    const [loading , setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults , setTotalResults] = useState(0);
  

  const updateNews = async()=>{
     
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0b2573717fb4819b71dd71cd9e03339&page=${page+1}&pageSize=12`;
    // setState({
    //   loading: true,
    // });
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    // setState({
    //     articles: parsedData.articles,
    //     totalResults:parsedData.totalResults,
    //     loading:false
    // })
    props.setProgress(100);
    
  }
  
  useEffect(()=>{
    updateNews();
  },[])
  // const componentDidMount = async()=>{
  //   updateNews();
  // }

  const fetchMoreData = async ()=>{
    // setState({
      //   page: page + 1
      // })
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0b2573717fb4819b71dd71cd9e03339&page=${page+1}&pageSize=12`;
      setPage(page+1);
    // setState({
    //   loading: true,
    // });
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // setState({
    //     articles: articles.concat(parsedData.articles),
    //     totalResults:parsedData.totalResults,
    //     loading:false
    // })
    setLoading(false);

   
  }

  // const prevPg = async ()=>{
  //   setPage(page-1);
  //   updateNews();
  //   // console.log("Previous");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0b2573717fb4819b71dd71cd9e03339&page=${page-1}&pageSize=12`;
  //   // setState({
  //   //     page: page-1
  //   // });
  //   // updateNews();
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // // console.log(parsedData);
  //   // setState({
  //   //     page:page-1,
  //   //     articles: parsedData.articles,
  //   // loading:false
  //   // })

  // };

//  const nxtPg = async ()=>{
//     setPage(page+1);
//     updateNews();
//     // console.log("Next");
        
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f0b2573717fb4819b71dd71cd9e03339&page=${page+1}&pageSize=12`;
//     // setState({loading:true});
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // // console.log(parsedData);
//     // setState({
//     //     page:page+1,
//     //     articles: parsedData.articles,
//     // loading:false
//     // })

//     //  setState({
//     //       page: page+1
//     //   });
//     //   updateNews();
    
//   }
  
  // render() {
    return (
      <div>
        <div className='container my-3'>
            <h2>HeadLines</h2>
            {loading && <Loading/>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading/>}
              > 
            <div className='container'>
            <div className='row'>
              {/* !loading && :->this was below*/} 
              {articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                    <NewsItems title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,50):""} imgUrl={element.urlToImage}  newsUrl={element.url}/>
                  </div>
                })}
            </div>
            </div>

            </InfiniteScroll>
            
            {/*  Pagination */}
            {/* <div className="container d-flex justify-content-between">
            <button type="button" disabled={page<=1} onClick={prevPg} className="btn btn-dark">&larr; Previous</button>
            <button type="button" disabled={page+1 > Math.ceil(totalResults/12)} onClick={nxtPg} className="btn btn-dark">Next &rarr;</button>
            </div> */}
        </div>
      </div>
    )
  // }
}

News.defaultProps = {
  country: 'us',
  pageSize:  12,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News