import React from 'react'
import innerstyles from './innerpages.module.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const Offers = () => {
    return (
        <main>
            <section className={innerstyles.breadcrums}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center">Offers</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Container maxWidth="lg" className='px-0'>
                  <Grid size="12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas illo id inventore veniam soluta distinctio explicabo molestiae consectetur aspernatur unde esse, aliquid suscipit architecto cupiditate in! Dignissimos illo veritatis, aut quod quo dolor doloremque quis ratione adipisci suscipit, provident, laboriosam quae? Facere sint, molestias odit illo odio alias, corporis sequi eum ipsum adipisci vel soluta illum dolor maxime autem officia obcaecati beatae! Fuga, soluta quidem? Officiis consequatur, unde non harum fuga doloribus quis. Voluptates possimus eos explicabo aspernatur ab blanditiis autem, illo necessitatibus officia omnis quod ipsam commodi dolores eveniet dignissimos repellat eligendi harum accusantium excepturi minus quasi, ex perspiciatis accusamus laborum. Facere dolorem at accusamus aspernatur ipsa beatae dolore eaque dicta, voluptate necessitatibus minus illo? Consequatur commodi quasi dolorem! Minus voluptas temporibus nisi modi, libero fuga consequatur ad dolor saepe doloribus ullam reprehenderit ut quas necessitatibus ratione eum voluptates, harum, aliquam corrupti est quos dignissimos nostrum officiis. Vitae, aliquam. Odio, obcaecati necessitatibus. Veritatis placeat maxime suscipit magnam libero, deleniti inventore sint ab sed consequatur vitae fugit ut nisi minus hic consequuntur dolore minima ducimus amet dolor itaque, veniam ratione reiciendis! Eos ducimus laudantium commodi, repellat architecto odio nisi, reiciendis iusto in sequi, nihil nobis consequuntur inventore veritatis necessitatibus.</p>
                  </Grid>
                </Container>
            </section>
        </main>
    )
}

export default Offers