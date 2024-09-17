export default async function sitemap() {
	return [
		{
			url: process.env.NEXT_PUBLIC_URL,
			lastModified: new Date(),
		},
		{
			url: process.env.NEXT_PUBLIC_URL + "/about",
			lastModified: new Date(),
		},
		{
			url: process.env.NEXT_PUBLIC_URL + "/client",
			lastModified: new Date(),
		},
		{
			url: process.env.NEXT_PUBLIC_URL + "/services",
			lastModified: new Date(),
		},
		{
			url: process.env.NEXT_PUBLIC_URL + "/contact",
			lastModified: new Date(),
		},
		{
			url: process.env.NEXT_PUBLIC_URL + "/privacy",
			lastModified: new Date(),
		},
		{
			url: process.env.NEXT_PUBLIC_URL + "/terms",
			lastModified: new Date(),
		},
	];
}
