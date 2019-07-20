import React from 'react';
import {
    Show,
    ShowButton,
    SimpleShowLayout,
    RichTextField,
    DateField,
    List,
    Edit,
    Create,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    Filter
} from 'react-admin';

const TemplateFilter = props => (
    <Filter {...props}>
                <TextInput label="" source="" alwaysOn />
                <TextInput label="" source="" />
    </Filter>
);

export const TemplateList = ({ classes, ...props }) => (
    <div>
            <List
            {...props}
            filters={<TemplateFilter />}
            sort={{ field: '', order: 'DESC' }}
            perPage={50}
             >
                <Datagrid rowClick="edit">
                    <TextField label="" source="" />
                    <EditButton />
                    <ShowButton />
                </Datagrid>
        </List>
    </div>
);

export const TemplateCreate = ({ classes, ...props }) => (
    <div>
        <Create {...props }>
                <TabbedForm redirect="show">
                    <FormTab label="Основні">
                        <TextInput type="" autoFocus source="" formClassName={classes.nickname} />
                        <ReferenceInput source="" reference="" label="" defaultValue={5} >
                            <SelectInput source="" />
                        </ReferenceInput>
                    </FormTab>
                    <FormTab label="Додаткові">
                    </FormTab>
                </TabbedForm>
        </Create>
    </div>
);

export const TemplateEdit = ({ classes, ...props }) => (
    <div>
        <Edit title={<TemplateTitle />} {...props}>
            <TabbedForm redirect="show">
                <FormTab label="Основні">
                    <TextInput type="" autoFocus source="" formClassName={classes.nickname} />
                    <ReferenceInput source="" reference="" label="" defaultValue={5} >
                        <SelectInput source="" />
                    </ReferenceInput>
                </FormTab>
                <FormTab label="Додаткові">
                </FormTab>
            </TabbedForm>
        </Edit>
    </div>
);