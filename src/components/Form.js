import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Picker from "./Picker";
import Button from '@material-ui/core/Button';
import shortid from 'shortid';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BasicTextFields({ handleClose, addData, dataEdit, updateData }) {
    const classes = useStyles();
    const isEdit = Object.entries(dataEdit).length;  
    const [data, setData] = useState({
        namePet: {
            val: '',
            error: false,
            msg: ''
        },
        breedPet: {
            val: '',
            error: false,
            msg: ''
        },
        birthdayPet: {
            val: new Date(),
            error: false,
            msg: ''
        },
        type: {
            val: '',
            error: false,
            msg: ''
        },
        ownerName: {
            val: '',
            error: false,
            msg: ''
        },
        phone: {
            val: '',
            error: false,
            msg: ''
        },
        address: {
            val: '',
            error: false,
            msg: ''
        },
        email: {
            val: '',
            error: false,
            msg: ''
        }
    });
    useEffect(() => {
        (() => {
            const isEdit = Object.entries(dataEdit).length;
            if(isEdit !== 0){
                setData({
                    id : dataEdit.id,
                    namePet: {
                        val: dataEdit.namePet.val,
                        error: false,
                        msg: ''
                    },
                    breedPet: {
                        val: dataEdit.breedPet.val,
                        error: false,
                        msg: ''
                    },
                    birthdayPet: {
                        val: new Date(dataEdit.birthdayPet.val),
                        error: false,
                        msg: ''
                    },
                    type: {
                        val: dataEdit.type.val,
                        error: false,
                        msg: ''
                    },
                    ownerName: {
                        val: dataEdit.ownerName.val,
                        error: false,
                        msg: ''
                    },
                    phone: {
                        val: dataEdit.phone.val,
                        error: false,
                        msg: ''
                    },
                    address: {
                        val: dataEdit.address.val,
                        error: false,
                        msg: ''
                    },
                    email: {
                        val: dataEdit.email.val,
                        error: false,
                        msg: ''
                    }
                })
            }else{
                setData({
                    namePet: {
                        val: '',
                        error: false,
                        msg: ''
                    },
                    breedPet: {
                        val: '',
                        error: false,
                        msg: ''
                    },
                    birthdayPet: {
                        val: new Date(),
                        error: false,
                        msg: ''
                    },
                    type: {
                        val: '',
                        error: false,
                        msg: ''
                    },
                    ownerName: {
                        val: '',
                        error: false,
                        msg: ''
                    },
                    phone: {
                        val: '',
                        error: false,
                        msg: ''
                    },
                    address: {
                        val: '',
                        error: false,
                        msg: ''
                    },
                    email: {
                        val: '',
                        error: false,
                        msg: ''
                    }
                });
            }
        })()
    },[dataEdit]);
    const clearForm = () => {
        setData({
            namePet: {
                val: '',
                error: false,
                msg: ''
            },
            breedPet: {
                val: '',
                error: false,
                msg: ''
            },
            birthdayPet: {
                val: new Date(),
                error: false,
                msg: ''
            },
            type: {
                val: '',
                error: false,
                msg: ''
            },
            ownerName: {
                val: '',
                error: false,
                msg: ''
            },
            phone: {
                val: '',
                error: false,
                msg: ''
            },
            address: {
                val: '',
                error: false,
                msg: ''
            },
            email: {
                val: '',
                error: false,
                msg: ''
            }
        });
    }

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: {
                val: event.target.value,
                error: false,
                msg: ''
            }
        })
    };

    const handleChangeDate = (date) => {
        setData({
            ...data,
            birthdayPet: {
                ...data.birthdayPet,
                val: date
            }
        })
    }

    const validateEmail = (mail) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return false
        }
        return true
    }

    const validarForm = () => {
        let result = false;
        let dataCopy = data;
        if (data.namePet.val === '') {
            dataCopy = {
                ...dataCopy,
                namePet: {
                    ...data.namePet,
                    error: true,
                    msg: 'Please enter name'
                }
            }
            result = true;
        }
        if (data.breedPet.val === '') {
            dataCopy = {
                ...dataCopy,
                breedPet: {
                    val: data.breedPet.val,
                    error: true,
                    msg: 'Please enter breed'
                }
            }
            result = true;
        }
        if (data.type.val === '') {
            dataCopy = {
                ...dataCopy,
                type: {
                    val: data.type.val,
                    error: true,
                    msg: 'Please enter type'
                }
            }
            result = true;
        }
        if (data.ownerName.val === '') {
            dataCopy = {
                ...dataCopy,
                ownerName: {
                    val: data.ownerName.val,
                    error: true,
                    msg: 'Please enter owner name'
                }
            }
            result = true;
        }
        if (data.phone.val === '') {
            dataCopy = {
                ...dataCopy,
                phone: {
                    val: data.phone.val,
                    error: true,
                    msg: 'Please enter phone'
                }
            }
            result = true;
        }
        if (data.address.val === '') {
            dataCopy = {
                ...dataCopy,
                address: {
                    val: data.address.val,
                    error: true,
                    msg: 'Please enter address'
                }
            }
            result = true;
        }
        if (data.email.val === '') {
            dataCopy = {
                ...dataCopy,
                email: {
                    ...data.email,
                    error: true,
                    msg: 'Please enter email'
                }
            }
            result = true;
        } else if (validateEmail(data.email.val)) {
            dataCopy = {
                ...dataCopy,
                email: {
                    ...data.email,
                    error: true,
                    msg: 'Please enter email valid'
                }
            }
            result = true;
        }
        setData(dataCopy);
        return result;
    }

    const add = (e) => {
        e.preventDefault();
        if (!validarForm()) {
            data.birthdayPet.val = data.birthdayPet.val.toISOString().split('T')[0];
            addData(data);
            clearForm();
            handleClose();
        }
    }

    const update = (e)=>{
        e.preventDefault();
        if(!validarForm()){
            data.birthdayPet.val = data.birthdayPet.val.toISOString().split('T')[0];
            updateData(data);
            clearForm();
            handleClose();
        }
    }

    return (
        <form className={classes.root} onSubmit={isEdit === 0 ? add : update} noValidate autoComplete="off">
            <TextField
                style={{ width: '100%' }}
                error={data.namePet.error}
                id="standard-basic"
                name='namePet'
                label="Name Pet"
                helperText={data.namePet.msg}
                value={data.namePet.val}
                onChange={handleChange}
            />
            <TextField
                style={{ width: '100%' }}
                error={data.breedPet.error}
                id="standard-basic"
                name='breedPet'
                label="Pet Breed"
                helperText={data.breedPet.msg}
                value={data.breedPet.val}
                onChange={handleChange}
            />
            <TextField
                style={{ width: '100%' }}
                error={data.type.error}
                id="standard-basic"
                name='type'
                label="Type Pet"
                helperText={data.type.msg}
                value={data.type.val}
                onChange={handleChange}
            />
            <Picker date={data.birthdayPet.val} onChange={handleChangeDate} />
            <TextField
                style={{ width: '100%' }}
                error={data.ownerName.error}
                id="standard-basic"
                name='ownerName'
                label="Owner name"
                helperText={data.ownerName.msg}
                value={data.ownerName.val}
                onChange={handleChange} />
            <TextField
                style={{ width: '100%' }}
                error={data.phone.error}
                id="standard-basic"
                name='phone'
                label="Phone"
                helperText={data.phone.msg}
                value={data.phone.val}
                onChange={handleChange} />
            <TextField
                style={{ width: '100%' }}
                error={data.address.error}
                id="standard-basic"
                name='address'
                label="Address"
                helperText={data.address.msg}
                value={data.address.val}
                onChange={handleChange} />
            <TextField
                style={{ width: '100%' }}
                error={data.email.error}
                id="standard-basic"
                name='email'
                label="Email"
                helperText={data.email.msg}
                value={data.email.val}
                onChange={handleChange} />
            <Button onClick={handleClose}>
                Cancel
            </Button>
            <Button type='submit'>
                {isEdit === 0 ? 'Add' : 'Update'}
            </Button>
        </form>
    );
}