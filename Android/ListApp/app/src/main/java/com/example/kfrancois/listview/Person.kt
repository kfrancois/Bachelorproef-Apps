package com.example.kfrancois.listview

import com.github.javafaker.Faker
import java.util.*

val faker = Faker(Locale("en-US"))
val random = Random()

class Person(var name: String, val gender: String)

fun getPeople(amount: Int): Array<Person> {
    return Array(amount, { getRandomPerson() })
}

fun getRandomPerson(): Person = Person(faker.name().fullName(), if (random.nextBoolean()) "Male" else "Female")