
<script>
export let title = 'Landing Page';
$: document.title = title;

export let navList = [{href : "/login", linkText : "Log In"}];


</script>


<header>
    <a href="/">
        <img src="./images/logo.png" />
    </a>

    <nav>
        <ul>
            {#each navList as listItem}
                <li><a href="{listItem.href}">{listItem.linkText}</a></li>
            {/each}
        </ul>
    </nav>
</header>

<style>
    header {
        width:100%;
    display: flex;
    height: clamp(50px, 7.50vh, 100px);
    background-color: #f0f0f0;
}


header>a {
    width: 9vw;
}

header>a>img {
    width: auto;
    height: 90%;
    margin: 1% 0 1% 2%;
}

header>nav>ul {
    display: flex;
    width: 89vw;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    height: 100%;
    padding: 0;
    gap:2.5%;
}

header>nav>ul>li:last-of-type {
    margin-right:2.5vw;
}
</style>