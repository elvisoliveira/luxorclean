# LuxorClean

```
# to run locally with live reload
npm run dev

# to publish, just run the deploy script and push
npm run deploy
```

```
let photos = [];
document.querySelectorAll("a[href*='/p/']").forEach((a) => {
	photos.push({
		href: a.href,
		img: a.querySelector("img").alt,
		src: a.querySelector("img").src
	});
});
console.log(JSON.stringify(photos));
```
