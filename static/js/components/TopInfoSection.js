
const TopInfoSection = () => {
    return (
        <div className='container'>
            <div className='row justify-content-between mt-3'>
                <div className='col-md-6 top-holder'>
                    <h1 className='page-title'>Doodle Ape Club</h1>
                    <p className='subtitle'>Welcome to the Broccoli Nursery! Give your Broccolis into the nursery and the botanists will reward you every 12 hours with $BRCC!.</p>
                    <p className='primary-text'>Stake your Broccolis to earn $BRCC  -  Utility Token for the Broccoli Metaverse - Breed your Broccolis with $BRCC in February</p>
                    <div className='d-flex flex-wrap align-items-center gap-3 my-4 social-holder'>
                        <a href='https://twitter.com/NFT_Broccoli' target='_blank'><img src='/assets/images/twitter.png' height='45' /></a>
                        <a href='https://discord.gg/h8T6p8qgQT' target='_blank'><img src='/assets/images/discord.png' height='45' /></a>
                        <a href='https://opensea.io/collection/broccoli-club' target='_blank'><img src='/assets/images/opensea.png' height='45' /></a>
                        <a href='https://polygonscan.com/address/0x95bce67825ea24b632c97b0393f1789a479b3878' target='_blank'><img src='/assets/images/matic.svg' height='45' /></a>
                       
                    </div>
                </div>
                <div className='col-md-6 logo-holder'>
                    <img src='/assets/images/blid.jpg' className='blid-image' />
                </div>
            </div>
        </div>
    )
}

export default TopInfoSection