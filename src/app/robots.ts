import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_URL;

	return {
		rules: {
			userAgent: "*",
			allow: [
				"/",
				"/about",
				"/services",
				"/contact",
				"clients",
				"terms",
				"privacy",
			],
		},
		sitemap: baseUrl + "sitemap.xml",
	};
}
