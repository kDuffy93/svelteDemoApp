<script>

</script>


<footer>
    <aside>
        &copy; Georgian College Web Project Studio 2023
        <br/>
        Team Marshmallow
        </aside>
        <div>
            <p>Partners</p>
            <div>
                <img src="./images/CountyOfSimcoeLogo.png"/>
            </div>
            <div>
                <img src="./images/CCIS_Logo_Vertical.webp" />
            </div>
        </div>
</footer>


<style>
    footer {

height: 15vh;
background-color: #f0f0f0;
display: flex;
align-items: center;
position: fixed;
bottom: 0vh;
right: 0;
width: 100%;
}

footer>aside {
width: 40%;
text-align: center;


}

footer>div {
height: 100%;
width: 60%;
display: grid;
grid-template-columns: repeat(1fr, 5);

grid-template-areas: ". . title . ." " . partner1 . partner2 .";
}

footer>div>p {
grid-area: title;
text-align: center;
font-size: 8pt;
margin: 0;
}

footer>div>div:first-of-type {
grid-area: partner1;
height: inherit;
text-align: center;


}

footer>div>div:last-of-type {
grid-area: partner2;
height: inherit;
text-align: center;

}

footer>div>div:last-of-type>img,
footer>div>div:first-of-type>img {
width: auto;
height: 8vh;
}
</style>