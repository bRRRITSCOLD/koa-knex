const knex = require('./knex');

module.exports = {

  objects: {
    getAllObjects: (tableReference, selectReference) => {
      return knex(
          `${tableReference}`
        )
        .select(
          `${selectReference}`
        );
    },

    getSingleObject: (tableReference, selectReference, whereReference) => {
      return knex(
          `${tableReference}`
        )
        .select(
          `${selectReference}`
        )
        .where(
          whereReference
        );
    },

    addObject: (tableReference, insertReference, returningReference) => {
      return knex(
          `${tableReference}`
        )
        .insert(
          insertReference
        )
        .returning(
          `${returningReference}`
        );
    },

    updateObject: (tableReference, updateReference, whereReference, returningReference) => {
      return knex(
          `${tableReference}`
        )
        .update(
          updateReference
        )
        .where(
          whereReference
        )
        .returning(
          `${returningReference}`
        );
    },

    deleteObject: (tableReference, whereReference, returningReference) => {
      return knex(
          `${tableReference}`
        )
        .del()
        .where(
          whereReference
        )
        .returning(`${returningReference}`);
    }
  },
  
  relationals : {
    joinRelatedObjects: (tableReferenceOne, whereReference, tableReferenceTwo, columnReferenceTableOne, columnReferenceTableTwo, selectReference) => {
      return knex(
          `${tableReferenceOne}`
        )
        .where(
          whereReference
        )
        .join(
          `${tableReferenceTwo}`,
          `${columnReferenceTableOne}`,
          '=',
          `${columnReferenceTableTwo}`
        )
        .select(
          selectReference
        );
    },

    getAllRelatedObjects: (tableReference, selectReference, whereReference) => {
      return knex(
          `${tableReference}`
        )
        .select(
          `${selectReference}`
        )
        .where(
          whereReference
        );
    },

    getSingleRelatedObject: (tableReference, selectReference, whereReference) => {
      return knex(
          `${tableReference}`
        )
        .select(
          `${selectReference}`
        )
        .where(
          whereReference
        );
    }
  },

  timestamps: {
    getSingleTimestamp: (tableReference, selectReference, whereReference) => {
      return knex(
         `${tableReference}`
       )
       .select(
         `${selectReference}`
       )
       .where(
         whereReference
       );
    },

    addTimestamps: (tableReference, insertReference, returningReference) => {
      return knex(
          `${tableReference}`
        )
        .insert(
          insertReference
        )
        .returning(
          `${returningReference}`
        );
    },

    updateTimestamps: (tableReference, whereReference, returningReference) => {
      return knex(
          `${tableReference}`
        )
        .update({
          updated_at: knex.fn.now()
        })
        .where(
          whereReference
        )
        .returning(
          `${returningReference}`
        );
    },

    deleteTimestamps: (tableReference, whereReference, returningReference) => {
      return knex(
          `${tableReference}`
        )
        .del()
        .where(
          whereReference
        )
        .returning(
          `${returningReference}`
        );
    }
  }
}
