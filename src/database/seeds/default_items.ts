import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamps', image: 'lamps.svg' },
    { title: 'Bateries', image: 'bateries.svg' },
    { title: 'Paper', image: 'paper.svg' },
    { title: 'Electronic Residue', image: 'electronics.svg' },
    { title: 'Organic Residue', image: 'organics.svg' },
    { title: 'Kitchen Oil', image: 'oil.svg' },
  ]);
}