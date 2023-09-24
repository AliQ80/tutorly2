<script setup lang='ts'>
const supabase = useSupabaseClient()

const submitted = ref(false)

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const role = ref('')
const gender = ref('')

const country = ref('')
const area = ref('')
const school = ref('')

// const area = ref([])
// const area = ref(`data.area.${district.value}`)

const data
  = {
    district: ['district1', 'district2', 'district3'],
    area: [
      { name: 'district1', value: ['d1area1', 'd1area2', 'd1area3'] },
      { name: 'district2', value: ['d2area1', 'd2area2', 'd2area3'] },
      { name: 'district3', value: ['d3area1', 'd3area2', 'd3area3'] },
    ],
    school: [
      { name: 'd1area1', value: ['d1a1school1', 'd1a1school2', 'd1a1school3'] },
      { name: 'd1area2', value: ['d1a2school1', 'd1a2school2', 'd1a2school3'] },
      { name: 'd1area3', value: ['d1a3school1', 'd1a3school2', 'd1a3school3'] },
      { name: 'd2area1', value: ['d2a1school1', 'd2a1school2', 'd2a1school3'] },
      { name: 'd2area2', value: ['d2a2school1', 'd2a2school2', 'd2a2school3'] },
      { name: 'd2area3', value: ['d2a3school1', 'd2a3school2', 'd2a3school3'] },
      { name: 'd3area1', value: ['d3a1school1', 'd3a1school2', 'd3a1school3'] },
      { name: 'd3area2', value: ['d3a2school1', 'd3a2school2', 'd3a2school3'] },
      { name: 'd3area3', value: ['d3a3school1', 'd3a3school2', 'd3a3school3'] },
    ],
  }
const areaList = computed(() => {
  // area.value = data.area.[...district.value],
  // return `data.area.${district.value}`
  const obj = data.area.find(o => o.name === country.value)
  return obj
})

const schoolList = computed(() => {
  // area.value = data.area.[...district.value],
  // return `data.area.${district.value}`
  const obj = data.school.find(o => o.name === area.value)
  return obj
})
// const data = [
//   { area: 'area1', school: 'school1', grade: 'grade1' },
//   { area: 'area2', school: 'school2', grade: 'grade3' },
//   { area: 'area3', school: 'school3', grade: 'grade3' },
// ]

async function userRegister(
  userFirstName: string,
  userLastName: string,
  userEmail: string,
  userPassword: string,
  userRole: string,
  userGender: string,
  userCountry: string,
  userCity: string,
  userSchool: string,
) {
  try {
    const { error } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
      options: {
        data: {
          email: userEmail,
          first_name: userFirstName,
          last_name: userLastName,
          role: userRole,
          gender: userGender,
          country: userCountry,
          city: userCity,
          school: userSchool,
        },
      },
    })

    // user.firstName = userFirstName
    // user.lastName = userLastName
    // user.email = userEmail
    // user.role = userRole
    // user.gender = userGender

    submitted.value = true

    if (error)
      throw error
  }
  catch (error) {
    console.error(error)
  }
}
// TODO: remove submitHandler function

function submitHandler() {
  userRegister(
    firstName.value,
    lastName.value,
    email.value,
    password.value,
    role.value,
    gender.value,
    country.value,
    area.value,
    school.value,
  )
}
</script>

<template>
  <div>
    <div class="container flex justify-center mx-auto mt-8">
      <FormKit
        id="registration"
        type="form"
        submit-label="Register"
        :form-class="submitted ? 'hide' : 'show'"
        :actions="true"
        @submit="submitHandler"
      >
        <h1 class="my-8 text-3xl font-semibold text-center text-purple-700">
          تسجيل مستخدم جديد!
        </h1>
        <div class="divider">
          Account
        </div>
        <FormKit
          v-model="email"
          type="text"
          name="email"
          label="Your email"
          placeholder="jane@example.com"
          validation="required|email"
        />
        <div class="flex double">
          <FormKit
            :classes="{
              outer: '$reset double-outer-right',
            }"
            type="password"
            name="password"
            label="Password"
            validation="required|length:6|matches:/[^a-zA-Z]/"
            :validation-messages="{
              matches: 'Please include at least one symbol',
            }"
            placeholder="Your password"
          />
          <div class="divider divider-horizontal" />
          <FormKit
            v-model="password"
            :classes="{
              outer: '$reset double-outer-left',
            }"
            type="password"
            name="password_confirm"
            label="Confirm password"
            placeholder="Confirm password"
            validation="required|confirm"
          />
        </div>
        <div class="divider">
          Profile
        </div>
        <div class="sm:flex">
          <FormKit
            v-model="firstName"
            :classes="{
              outer: '$reset double-outer-right',
            }"
            type="text"
            name="name"
            label="First name"
            placeholder="Jane"
            validation="required"
          />
          <div class="divider divider-horizontal" />
          <FormKit
            v-model="lastName"
            :classes="{
              outer: '$reset double-outer-left',
            }"
            type="text"
            name="name"
            label="Last name"
            placeholder="Doe"
            validation="required"
          />
        </div>
        <FormKit
          v-model="role"
          type="radio"
          label="What is your role?"
          :options="[
            { label: 'Student', value: 'student' },
            { label: 'Teacher', value: 'teacher' },
          ]"
        />
        <FormKit
          v-model="gender"
          type="radio"
          label="What is your gender?"
          :options="[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]"
        />
        <div class="divider">
          School
        </div>
        <FormKit
          v-model="country"
          type="select"
          label="select your country?"
          placeholder="Select an country"
          name="country"
          validation="required"
          :options="data.district"
        />
        <FormKit
          v-if="areaList"
          v-model="area"
          type="select"
          label="where is your area?"
          placeholder="Select an area"
          name="area"
          validation="required"
          :options="areaList.value"
        />
        <FormKit
          v-if="schoolList"
          v-model="school"
          type="select"
          label="What is your school?"
          placeholder="Select a school"
          name="school"
          validation="required"
          :options="schoolList.value"
        />
      </formkit>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.double-outer-right {
  @apply w-48 mr-8 ml-0 mb-2;
}
.double-outer-left {
  @apply w-48 mr-0 ml-8 mb-2;
}
</style>
