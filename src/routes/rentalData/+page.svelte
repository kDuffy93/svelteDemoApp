<script>

</script>

<main>

    <main>
        <section class="buttonSection">
            <button id="openModal">&emsp;&emsp;≡&emsp;filter&emsp;</button>
            <section id="modalArea" class="modalArea">
              <div id="modalBg" class="modalBg">
              </div>
              <div class="modalWrapper">
                <div class="modalContents">
                    <h1>Filter</h1>
                    <h2>City/Town</h2>
                    <button class="cityTown" type="button">Alliston/Bradford</button>
                    <button class="cityTown" type="button">Barrie</button>
                    <button class="cityTown" type="button">Collingwood</button>
                    <button class="cityTown" type="button">Midland</button>
                    <button class="cityTown" type="button">Orillia</button>
                    <h2 class="priceRange">Price Range</h2>
                    <div class="price">
                        <div class="minPrice">
                            <label for="minprice">Min Price:&nbsp;</label>
                            <input type="text" id="minprice" size="15" value="$ ">
                        </div>
                        <span>-</span>
                        <div class="maxPrice">
                            <label for="maxprice">Max Price:&nbsp;</label>
                            <input type="text" id="maxprice" size="15" value="$ ">
                        </div>
                    </div>
                    <h2 class="housingType">Housing Type</h2>
                    <button class="housing-tp-buttton" type="button"><i class="fa-solid fa-house"></i>detached</button>
                    <button class="housing-tp-buttton" type="button"><i class="fa-solid fa-city"></i>attached</button>
                    <button class="housing-tp-buttton" type="button"><i class="fa-solid fa-house-chimney"></i>house</button>
                    <button class="housing-tp-buttton" type="button"><i class="fa-solid fa-building"></i>apartment</button>
                    <button class="housing-tp-buttton" type="button"><i class="fa-solid fa-stairs"></i>basement</button>
                    <h2 class="numberOfBedrooms">Number of Bedrooms</h2>
                    <input type="range" id="rangeBedrooms" min="1" max="6" step="1">
                    <h3>You are choosing<span id="current-value"></span>bedrooms now.</h3>
                    <h2 class="typeOfLease">Type of Lease</h2>
                    <div class="lease">
                        <input type="checkbox" name="leaseTerm" value="shortterm" id="shortterm">
                        <label for="shortterm" class="leaseLabel">Less than 6 months</label>
                        <input type="checkbox" name="leaseTerm" value="middleterm" id="middleterm">
                        <label for="middleterm" class="leaseLabel">6 months to 12 months</label>
                        <input type="checkbox" name="leaseTerm" value="longterm" id="longterm">
                        <label for="longterm" class="leaseLabel">Over 1 year</label>
                        <input type="checkbox" name="leaseTerm" value="spring" id="sprint">
                        <label for="spring" class="leaseLabel">Spring (Seasonal Rental)</label>
                        <input type="checkbox" name="leaseTerm" value="summer" id="summer">
                        <label for="summer" class="leaseLabel">Summer (Seasonal Rental)</label>
                        <input type="checkbox" name="leaseTerm" value="fall" id="fall">
                        <label for="fall" class="leaseLabel">Fall (Seasonal Rental)</label>
                        <input type="checkbox" name="leaseTerm" value="winter" id="winter">
                        <label for="winter" class="leaseLabel">Winter (Seasonal Rental)</label>
                    </div>
                </div>
                <div id="closeModal" class="closeModal">
                    ×
                </div>
              </div>
            </section>
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">City/Town</a></li>
                  <li><a class="dropdown-item" href="#">Price</a></li>
                  <li><a class="dropdown-item" href="#">Housing Type</a></li>
                  <li><a class="dropdown-item" href="#">Number of bedrooms</a></li>
                  <li><a class="dropdown-item" href="#">Type of Lease</a></li>
                </ul>
            </div>
            
            <button class="exportAll" type="button">Export All</button>
            <button class="exportCurrent" type="button">Export Current</button>
            <button class="getData" type="button">Get Data</button>
        </section>
        <table>
            <tr>
                <th>Stratified Area</th>
                <th>Municipality</th>
                <th>Street #</th>
                <th>Street Name</th>
                <th>Housing Type</th>
                <th>Unit Size</th>
                <th>Secondary Suite</th>
                <th>Monthly Rent</th>
                <th>Utilities Included</th>
                <th>Landlord Type</th>
                <th>Stability</th>
            </tr>
            <tr>
                <td class="icon row1">Alliston/Bradford</td>
                <td>Bradford West</td>
                <td>280</td>
                <td>MILLER PARK AVE</td>
                <td>House</td>
                <td>2 Bedrooms</td>
                <td>Yes</td>
                <td>$2,300</td>
                <td>Yes</td>
                <td>Private</td>
                <td>Over 1 year</td>
            </tr>
            <tr>
                <td class="icon row2">Barrie</td>
                <td>Springwater</td>
                <td>25</td>
                <td>SWEET CICELY ST</td>
                <td>House</td>
                <td>4 Bedrooms</td>
                <td>No</td>
                <td>$2,975</td>
                <td>No</td>
                <td>Private</td>
                <td>6 months to 12 months</td>
            </tr>
            <tr>
                <td class="icon row3">Collingwood</td>
                <td>Collingwood</td>
                <td>460</td>
                <td>ONTARIO Street Unit #603</td>
                <td>Apartment</td>
                <td>2 Bedrooms</td>
                <td>No</td>
                <td>$2,100</td>
                <td>Yes</td>
                <td>Not Stated</td>
                <td>Less than 6 months</td>
            </tr>
            <tr>
                <td class="icon row4">Midland</td>
                <td>Midland</td>
                <td>652</td>
                <td>NORMAN CRES</td>
                <td>House</td>
                <td>4 Bedrooms</td>
                <td>Yes</td>
                <td>$2,800</td>
                <td>No</td>
                <td>Not Stated</td>
                <td>Winter (Seasonal Rental)</td>
            </tr>
            <tr>
                <td class="icon row5">Orillia</td>
                <td>Orillia</td>
                <td>189</td>
                <td>ISABELLA DR</td>
                <td>Attached</td>
                <td>3 Bedrooms</td>
                <td>Yes</td>
                <td>$2,700</td>
                <td>Yes</td>
                <td>Private</td>
                <td>Over 1 year</td>
            </tr>
        </table>
    </main>
</main>

<style>


header {
    justify-content: space-between;
    border: solid white 3px;
}

/* toggle button */

.toggle {
    margin: 0.6em 4em 0 0;
    position: relative;
    width: 55px;
    height: 28px;
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;
}

.toggle:before {
    content: "";
    height: 100%;
    display: block;
    background: darkgray;
}

.toggle:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 19px;
    height: 22px;
    border-radius: 30px;
    background: #fff;
    transition: 0.2s ease-out;
}

.toggle.checked:before {
    background: #35c759;
}

.toggle.checked:after {
    left: 33px;
}

/* body */

.buttonSection {
    height: clamp(50px, 7.50vh, 100px);
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
}

/* filter */

.modalContents h1 {
    border-bottom: 2px lightgray solid;
    text-align: center;
}

.modalContents h2 {
    margin-bottom: 1em;
}

.cityTown {
    font-size: 1.3em;
    padding: 0.5em 1.8em;
    margin-right: 1.7em;
}

.priceRange, .housingType, .numberOfBedrooms, .typeOfLease {
    margin-top: 1.2em;
    border-top: 2px lightgray solid;
    padding-top: 0.8em;
}

.price {
    text-align: center;
    font-size: 1.3em;
}

span {
    margin: 0 2em;
}

.minPrice, .maxPrice {
    display: inline;
}

#minprice, #maxprice {
    outline: 2px black solid;
    border-radius: 10px;
}

.housing-tp-buttton {
    background-color: rgb(230, 230, 230);
    font-size: 1.5em;
    padding: 0.5em;
    margin-right: 2em;
}

i {
    margin-right: 0.5em;
}

.lease {
    display: grid;
    grid-template-columns: 5% 45% 5% 45%;
}

.leaseLabel {
    font-weight: normal;
    font-size: 1.3em;
}

.modalArea {
    display: none;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
  
.modalBg {
    width: 100%;
    height: 100%;
    background-color: rgba(30,30,30,0.6);
}
  
.modalWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    width: 70%;
    max-width: 1000px;
    padding: 10px 30px;
    background-color: #fff;
    height : 90vh;
    overflow : auto;
}
  
.closeModal {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    cursor: pointer;
    font-size: 2em;
}

button {
    background-color: rgb(190, 190, 190);
    border: none;
    border-radius: 10px;
    cursor: pointer;
}
  
#openModal {
    font-size: 1.3em;
    margin: 0.3em 0 0.3em 6em;
}

/* dropdown menu */

.dropdown {
    border-radius: 10px;
    background-color: rgb(190, 190, 190);
    padding: 0.1em;
    margin: 0.3em 30em 0.4em 0em;
}

.btn {
    border: none;
    font-size: 1.3em;
}

/* buttons */

.exportAll, .exportCurrent, .getData {
    font-size: 1.3em;
    margin: 0.3em 0;
}

.getData {
    margin-right: 5em;
}

/* Table */

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 95vw;
    margin: 1em 0 0 2.5em;
}

table tr {
    border-bottom: solid 1px #eee;
}

table th,table td {
    text-align: center;
    padding: 15px 0;
}

table td.icon {
    background-size: 35px;
    background-position: left 5px center;
    background-repeat: no-repeat;
    padding-left: 30px;
}

table td.icon.row1 {
    background-image: url(../public/images/sample1.jpg)
}

table td.icon.row2 {
    background-image: url(../public/images/sample2.jpg)
}

table td.icon.row3 {
    background-image: url(../public/images/sample3.jpg)
}

table td.icon.row4 {
    background-image: url(../public/images/sample4.jpg)
}

table td.icon.row5 {
    background-image: url(../public/images/sample5.jpg)
}

table tr:nth-child(odd) {
    background: #e9faf9;
}

table th {
    background-color: skyblue;
}


</style>