<script setup>
import { BaseBtn } from "../../../components/import";
import navigation from "../../../utils/navigation";
const settings = navigation.filter((nav) =>
    ["system_settings", "menu", "role"].includes(
        nav.text
    )
);
</script>

<template>
    <div class="col-12">
        <div class="row q-col-gutter-md">
            <div
                class="col-12 col-lg-3 col-md-6 col-sm-6"
                v-for="(setting, i) in settings"
                :key="i"
                v-permission="[`${['system_settings'].includes(setting.text) ? 'list-system-setting' : `list-${setting.text}` }`]"
            >
                <q-card>
                    <q-card-section class="text-center">
                        <div class="text-h5">
                            {{ $t(`links.${setting.text}`, 2) }}
                        </div>
                    </q-card-section>
                    <q-card-section class="text-center">
                        <q-icon color="accent" :name="setting.icon" size="10em"></q-icon>
                    </q-card-section>
                    <q-card-actions align="center" class="q-pb-lg">
                        <q-btn
                            :label="setting.text === 'system_settings' ? $t('table.edit_record') : $t('table.new_record')"
                            color="positive"
                            :to="{ name: setting.create }"
                            v-permission="[`${setting.text === 'system_settings' ? 'update-system-setting' : `create-${setting.text}` }`]"
                        />
                        <q-btn
                            :label="$t('action.list')"
                            color="indigo-10"
                            :to="{ name: setting.link }"
                            v-if="setting.text !== 'system_settings'"
                            v-permission="[`list-${setting.text}`]"
                        />
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>
