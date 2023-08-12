export const metadata = {
    title: 'Banners'
}
export default function layout({children, content, banner}){
    return (
        <div>
            <h1>It's Layout banners</h1>
            <div className={'banners'}>
				<div className={'banner'}>{banner}</div>
				<div className={'banner'}>{content}</div>
			</div>
            {children}
        </div>
    )
}
