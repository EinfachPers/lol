import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Image width="100%" height="100%px" src="https://uploads.quarkly.io/601ed988179f5c00220691fc/images/full.png?v=2021-02-06T18:02:25.158Z" />
		<Button
			position="fixed"
			top="auto"
			bottom="150px"
			height="59.161107692307695px"
			left="591px"
			right="800.3571428571429px"
			width="528.6428571428571px"
			background="rgba(0, 119, 204, 0)"
			color="rgba(247, 251, 255, 0)"
			focus-border-radius="0px"
			type="button"
			disabled={false}
		>
			Button
		</Button>
		<Button
			position="fixed"
			top="auto"
			bottom="210px"
			height="59.161107692307695px"
			left="588px"
			right="690.5px"
			width="641.5px"
			background="rgba(0, 119, 204, 0)"
			color="rgba(247, 251, 255, 0)"
			focus-border-radius="0px"
			type="button"
			disabled={false}
		>
			Button
		</Button>
		<Button
			position="fixed"
			top="auto"
			bottom="86px"
			height="59.161107692307695px"
			left="52px"
			right="auto"
			width="331.5043076923077px"
			background="rgba(0, 119, 204, 0)"
			color="rgba(247, 251, 255, 0)"
			focus-border-radius="0px"
			type="button"
			disabled={false}
		>
			Button
		</Button>
		<Button
			position="fixed"
			top="auto"
			bottom="153px"
			height="59.161107692307695px"
			left="53px"
			right="auto"
			width="331.5043076923077px"
			background="rgba(0, 119, 204, 0)"
			color="rgba(247, 251, 255, 0)"
			focus-border-radius="0px"
			type="button"
			disabled={false}
		>
			Button
		</Button>
		<Button
			position="fixed"
			top="3352.8976923076925px"
			bottom="212.923px"
			height="59.161107692307695px"
			left="52px"
			right="1536.4876923076924px"
			width="331.5043076923077px"
			background="rgba(0, 119, 204, 0)"
			color="rgba(247, 251, 255, 0)"
			focus-border-radius="0px"
			type="button"
			disabled={false}
		>
			Button
		</Button>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});