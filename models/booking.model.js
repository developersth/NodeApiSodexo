module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define(
        'booking',
        {
            _id: {
                type: Sequelize.INTEGER,
                field: 'book_id',
                primaryKey: true,
                autoIncrement: true
            },
            machine_id: {
                type: Sequelize.INTEGER,//รหัสเครื่องสลายนิ่ว
                field: 'machine_id',
            },
            user_id: {
                type: Sequelize.INTEGER,
                field: 'user_id',
            },
            job_title: {
                type: Sequelize.STRING(100),
                field: 'job_title'
            },
            location: {
                type: Sequelize.STRING,
                field: 'location'
            },
            hospital_id: {
                type: Sequelize.INTEGER,
                field: 'hospital_id',//รหัสโรงบาล
            },
            hospital_name: {
                type: Sequelize.STRING(100),
                field: 'hospital_name',//ชื่อโรงบาล
            },
            contact_person: {
                type: Sequelize.STRING,
                field: 'contact_person'
            },
            contact_mobile: {
                type: Sequelize.STRING(11),
                field: 'contact_mobile'
            },
            detail: {
                type: Sequelize.STRING,
                field: 'detail'
            },
            reservation_date: {
                type: Sequelize.DATE(),
                field: 'reservation_date'
            },
            reservation_time: {
                type: Sequelize.TIME(),
                field: 'reservation_time'
            },
            reservation_by: {//รหัสผู้ทำการจอง
                type: Sequelize.INTEGER,
                field: 'reservation_by'
            },
            update_by: {//รหัสผู้แก้ไข
                type: Sequelize.INTEGER,
                field: 'update_by'
            },
            created_at: {
                type: Sequelize.DATE(),
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
            },
            updated_at: {
                type: Sequelize.DATE(),
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            engine: 'InnoDB',
            charset: 'utf8',
        }
    );
    return Booking;
};