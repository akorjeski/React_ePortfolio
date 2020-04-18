import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

class Resume extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src='https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png'
                alt='avatar'
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Brian Prickril</h2>
            <h4 style={{ color: 'grey' }}>Web Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was.
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Philadelphia</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>bprickril22@gmail.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>

            <Education
              startYear={2010}
              endYear={2014}
              schoolName={'University of Delaware'}
              schoolDescription={
                'as;ldfja slfdkjaslfdja slkdfjasldfja s;ldkfj as;ldkfj as;dlkf ja;sl dfja;sdl kfjasdl fja;sldk fjas;l dfjasd lkfjas l;dkfj'
              }
            />

            <Education
              startYear={2010}
              endYear={2014}
              schoolName={'University of Delaware'}
              schoolDescription={
                'as;ldfjasl fdkjaslf djaslkdfjasldfjas ;ldkfjas;ldkfja s;dlkfja;sl  dfja;sd lkfjasdlf ja;sldkf jas;ldfjas dlkfjasl;dkfj'
              }
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName={'First Job'}
              jobDescription={
                'as;ld fjaslfdkjas lfdjaslkdfjasl dfjas;ldkfjas  ;ldkfjas;dlk  fja;sld fja;s dlkfj asdlfja;sldkf jas;ldfjasdlkf jasl;dkfj'
              }
            />

            <Experience
              startYear={2009}
              endYear={2012}
              jobName={'First Job'}
              jobDescription={
                'as;ld fjaslfdkjas lfdjaslkdfjasl dfjas;ldkfjas  ;ldkfjas;dlk  fja;sld fja;s dlkfj asdlfja;sldkf jas;ldfjasdlkf jasl;dkfj'
              }
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Skills</h2>

            <Skills skill='JavaScript' progress='30' />

            <Skills skill='HTML/CSS' progress='70' />

            <Skills skill='React' progress='10' />

            <Skills skill='MongoDB' progress='20' />

            <Skills skill='Ready for 1st Job' progress='100' />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
