import { Heading1BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { FC } from 'react'
import NotionRichText from './notion-richtext'

interface Props {
	block: Heading1BlockObjectResponse
}

const NotionH1: FC<Props> = ({ block }) => {
	return (
		<h1 className="text-black dark:text-white font-bold text-4xl mt-4 mb-1">
			<NotionRichText items={block.heading_1.rich_text} />
		</h1>
	)
}

export default NotionH1
