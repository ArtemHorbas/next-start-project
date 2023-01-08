import { FC } from 'react'
import { IMeta } from '@/GlobalComponents/Meta/interface'
import Head from 'next/head'

export const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="shortcut icon" href="/favicon.ico" />
			{description ? (
				<>
					<meta
						itemProp={'description'}
						name={'description'}
						content={description}
					/>
				</>
			) : (
				<meta
					itemProp={'description'}
					name={'description'}
					content={'CONTENT'}
				/>
			)}
		</Head>
	)
}
