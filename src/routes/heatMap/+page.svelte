<script>

</script>


    <main class="container">
        <div>
            <li>Barrie</li>
            <li class="c2r1">
                <p>37</p>
                <p>($1978.34)</p>
            </li>
            <li class="c3r1">
                <p>66</p>
                <p>($1978.34)</p>
            </li>
            <li class="c4r1">
                <p>73</p>
                <p>($1978.34)</p>
            </li>
            <li class="c5r1">
                <p>22</p>
                <p>($1978.34)</p>
            </li>
            <li>Collingwood</li>
            <li class="c2r2">
                <p>22</p>
                <p>($1978.34)</p>
            </li>
            <li class="c3r2">
                <p>18</p>
                <p>($1978.34)</p>
            </li>
            <li class="c4r2">
                <p>32</p>
                <p>($1978.34)</p>
            </li>
            <li class="c5r2">
                <p>37</p>
                <p>($1978.34)</p>
            </li>
            <li>Midland</li>
            <li class="c2r3">
                <p>12</p>
                <p>($1978.34)</p>
            </li>
            <li class="c3r3">
                <p>21</p>
                <p>($1978.34)</p>
            </li>
            <li class="c4r3">
                <p>17</p>
                <p>($1978.34)</p>
            </li>
            <li class="c5r3">
                <p>33</p>
                <p>($1978.34)</p>
            </li>
            <li>Orillia</li>
            <li class="c2r4">
                <p>33</p>
                <p>($1978.34)</p>
            </li>
            <li class="c3r4">
                <p>41</p>
                <p>($1978.34)</p>
            </li>
            <li class="c4r4">
                <p>28</p>
                <p>($1978.34)</p>
            </li>
            <li class="c5r4">
                <p>45</p>
                <p>($1978.34)</p>
            </li>
            <li>Alliston</li>
            <li class="c2r5">
                <p>26</p>
                <p>($1978.34)</p>
            </li>
            <li class="c3r5">
                <p>13</p>
                <p>($1978.34)</p>
            </li>
            <li class="c4r5">
                <p>7</p>
                <p>($1978.34)</p>
            </li>
            <li class="c5r5">
                <p>23</p>
                <p>($1978.34)</p>
            </li>
            <li class="filter black">
                <div class="offWhite border3pxblack">
                    <div>
                        <label for="areaCheck">Area</label>
                        <input name="areaFilter" id="areaCheck" type="radio">
                    </div>
                    <div>
                        <label for="municipalityCheck">Municipality</label>
                        <input name="areaFilter" id="municipalityCheck" type="radio">
                    </div>
                </div>
                <div class="offWhite border2pxblack">
                    <div>
                        <label for="typeCheck">Housing Type</label>
                        <input name="typeFilter" id="typeCheck" type="radio">
                    </div>
                    <div>
                        <label for="sizeCheck">Unit Size</label>
                        <input name="typeFilter" id="sizeCheck" type="radio">
                    </div>
                </div>
            </li>
            <li class="vertical">Apartment</li>
            <li class="vertical">Attached SDF</li>
            <li class="vertical">Detached SDF</li>
            <li class="vertical">Shared</li>
        </div>
        <aside>
            <h2>Filter By</h2>
            <div>
                <span id="noUnits">Number Of Units</span>
                <label id="slider" class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <span id="avgRent">Average Rent</span>
            </div>
        </aside>
    </main>

<style>
    main{
    display:flex;
}
main>div {
    width: 60%;
    height: 70vh;
    margin-top: 2.5vh;
    margin-left: 15%;
    display: grid;
    grid-template-columns: 37.5% repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr) 37.5%;
    grid-template-areas:
        "c1r1 c2r1 c3r1 c4r1 c5r1 "
        "c1r2 c2r2 c3r2 c4r2 c5r2 "
        "c1r3 c2r3 c3r3 c4r3 c5r3 "
        "c1r4 c2r4 c3r4 c4r4 c5r4 "
        "c1r5 c2r5 c3r5 c4r5 c5r5 "
        "c1r6 c2r6 c3r6 c4r6 c5r6 "
    ;

}
main>aside{
    height:100%;
    width:25%;
    padding-top:2.5vh;
    padding-left:3.5vw;
}
main>aside>h2{
    font-size: smaller;
    text-decoration: underline;
    text-align: center;
}
main>aside>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:10%;

}



#noUnits{
color: lightgreen;
font-size: smaller;
}
#avgRent{
    color:#ccc;
font-size: smaller;

}


main>div>li {
    list-style: none;
    text-align: center;
    padding-top: 1.5vh;
    border: 0.5px solid black;
}




main>div>li>p:nth-of-type(2) {
    font-size: 50%;
}

main>div>li>p {
    font-weight: bolder;
}

.vertical {
    writing-mode: vertical-lr;
    text-orientation: upright;
    padding-left: 33%;
    padding-top: 0;
}

.filter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
        "area ."
        "area ."
        "area type"
        ". type"
        ". type"
        ". type";
        padding:0;


}



.filter>div:nth-of-type(1) {
    grid-area: area;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.filter>div:nth-of-type(2) {
    grid-area: type;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;


}

label{
    text-align: left;
    width:75%;
}

.black{
    background-color:black;
}
.offWhite{
    background-color:#f6f6f6;
}
.border3pxblack{
    border: 3px solid black;
}


.c2r1 {
    background-color: #FE3808;
}

.c3r1 {
    background-color: #FF0000;
}

.c4r1 {
    background-color: #FF0000;
}

.c5r1 {
    background-color: #FDAE18;
}

.c2r2 {
    background-color: #FDAE18;
    /* */
}

.c3r2 {
    background-color: #FDAE18;
}

.c4r2 {
    background-color: #FE7010;
}

.c5r2 {
    background-color: #FE3808;
}

.c2r3 {
    background-color: #FCE420;
}

.c3r3 {
    background-color: #FDAE18;
}

.c4r3 {
    background-color: #FDAE18;
}

.c5r3 {
    background-color: #FE7010;
}

.c2r4 {
    background-color: #FE7010;
}

.c3r4 {
    background-color: #FE3808;
}

.c4r4 {
    background-color: #FE7010;
}

.c5r4 {
    background-color: #FE3808;
}

.c2r5 {
    background-color: #FDAE18;
}

.c3r5 {
    background-color: #FDAE18;
}

.c4r5 {
    background-color: #FCE420;
}

.c5r5 {
    background-color: #FDAE18;
}


/* -- slider css --*/
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: lightgreen;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
</style>