package com.example.koenf.calcapp

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import kotlinx.coroutines.experimental.launch
import kotlin.system.measureTimeMillis

class MainActivity : AppCompatActivity() {

    lateinit var status: TextView
    lateinit var statusHeader: TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val calculateButton = findViewById<Button>(R.id.calculateButton)
        status = findViewById(R.id.status)
        statusHeader = findViewById(R.id.statusHeader)

        calculateButton.setOnClickListener {
            calculate()
        }
    }

    private fun calculate() {
        status.text = "Calculating"

        launch {
            val time = measureTimeMillis {
                for (i in 0..30000) {
                    Math.pow(549413.0, 3440.0).toInt();
                }
            }
            runOnUiThread {
                statusHeader.visibility = View.VISIBLE
                status.text = "$time ms"
            }
        }
    }
}
