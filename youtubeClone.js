const youTubeArr = [
  [
    "4ykAepVkG5Y-HD.jpg",
    "4ykAepVkG5Y&list=PPSV",
    "Create A Website Like YOu Tube Using HTML CSS JS| You Tube Clone Website Design Ste by Step",
    "channels4_profile.jpg",
    "GreatStark",
  ],
  [
    "aeJ_IvfwoBg-HD.jpg",
    "aeJ_IvfwoBg&list=PPSV",
    "Build a Youtube clone UI with Bootstrap 5",
    "channels4_profile (1).jpg",
    "CodingWithEase",
  ],
  [
    "NljIHlZRTTE-HD (1).jpg",
    "NljIHlZRTTE&list=PPSV",
    "How To Make Website Like FB Using Html/Css during Media Query",
    "channels4_profile (1).jpg",
    "CodingWithEase",
  ],
  [
    "NljIHlZRTTE-HD (1).jpg",
    "TZdiRlFd9r0&list=PPSV",
    "How To Make Website Like FB Using Bootstrap during Media Query",
    "channels4_profile (7).jpg",
    "GreatStark",
  ],
  [
    "MscGIBk68So-HD.jpg",
    "MscGIBk68So&list=PPSV",
    "Bootstrap portfolio Website Tutorial| Bootstrap 5",
    "channels4_profile (3).jpg",
    "Adrien Twarog",
  ],
  [
    "CkVrmLLHmuI-HD.jpg",
    "CkVrmLLHmuI&list=PPSV",
    "Bootstrap portfolio Website Tutorial| Bootstrap 5",
    "channels4_profile (4).jpg",
    "Fajar Std",
  ],
  [
    "V0O4pY2xX10-HD.jpg",
    "V0O4pY2xX10&list=PPSV",
    "Create A SideBar Menu using HTML & CSS| Sidebar Menu in HTML & css",
    "channels4_profile (5).jpg",
    "CodingNepal",
  ],
  [
    "ZsSCHGyFeV8-HD.jpg",
    "ZsSCHGyFeV8&list=PPSV",
    "Side Menu Bar i Bootstrap 5 | Sidebar using Bootstrap 5",
    "channels4_profile (6).jpg",
    "Code With Yousaf",
  ],
  [
    "7Amej-clP-c-HD.jpg",
    "7Amej-clP-c&list=PPSV",
    "Sidebar Bootstrap 5| Coding League",
    "channels4_profile (7).jpg",
    "Coding League",
  ],
];
let length = youTubeArr.length;
let cont = "";
for (let i = 0; i < length; i++) {
  cont +=
    `
     <div class="col-md-12 col-lg-4 " >
    <div class="card p-0">
            <a href="https://www.youtube.com/watch?v=` +
    youTubeArr[i][1] +
    `" target="_blank">
            <img src="youtube-thumbnail/` +
    youTubeArr[i][0] +
    `" class="card-img-top" alt=""/>
    </a>
               <div class="card-body py-2 px-2">
                <div class="container-fluid d-flex p-0 m-0 gap-2">
                          <div
                            class="col-md-1 m-0  col-lg-1 "
                          >
                            <img
                              src="youtubeChannel/` +
    youTubeArr[i][3] +
    `"
                              alt=""
                              class="rounded-circle imges w-100"
                            />
                          </div>
                          
                          <div class="col-md-11 col-lg-11">
                            <p class="card-text text  content">
                             ` +
    youTubeArr[i][2] +
    `
                            </p>
                            <div class="card-foter">
                              <p class="image">
                              ` +
    youTubeArr[i][4] +
    `
                                 <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 24 24"
                                  class="rounded-circle"
                                >
                                  <path
                                    fill="currentColor"
                                    d="m9.55 17.308l-4.97-4.97l.714-.713l4.256 4.256l9.156-9.156l.713.714z"
                                  />
                                </svg>
                              </p>
                              <p class="bottom-foo">
                                888K views &middot; 6 years ago
                              </p>
                              </div>
                 </div>
     
                </div>
            </div>
            </div>
        </div>
    `;

  document.getElementById("content").innerHTML = cont;
}
