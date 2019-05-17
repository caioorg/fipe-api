import { Selector } from 'testcafe'

fixture`Getting Started`.page`${process.env.SITE_URL}`

const selectBrand = Selector('#brand')
const optionsBrand = selectBrand.find('option')
const selectModel = Selector('#model')
const optionsModel = selectModel.find('option')
const selectYear = Selector('#year')
const optionsYeat = selectYear.find('option')
const detailsCar = Selector('.details-car')

const buttonSubmit = Selector('.form-button')

test('Checking flow of choice of vehicle', async t => {
  await t
    .click(selectBrand)
    .click(optionsBrand.withText('VW - VolksWagen'))
    .click(buttonSubmit)
    .click(selectModel)
    .click(optionsModel.withText('AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die'))
    .click(buttonSubmit)
    .click(selectYear)
    .click(optionsYeat.withText('2013 Diesel'))
    .click(buttonSubmit)
    .expect(detailsCar)
    .ok()
})
