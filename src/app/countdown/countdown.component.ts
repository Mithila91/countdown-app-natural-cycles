import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './countdown.component.html',
})
export class CountdownComponent implements OnInit {
  title: string = ''
  targetDate: string = ''
  timeLeft!: string
  countdownInterval!: ReturnType<typeof setInterval>

  ngOnInit(): void {
    const storedTitle = localStorage.getItem('title')
    const storedDate = localStorage.getItem('targetDate')

    if (storedTitle) {
      this.title = storedTitle
    } else {
      this.title = 'Your Event'
    }

    if (storedDate) {
      this.targetDate = storedDate
    } else {
      this.targetDate = new Date().toISOString().split('T')[0]
    }

    this.startCountdown()
  }

  startCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval)
    }

    const endDate = new Date(this.targetDate).getTime()
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      this.timeLeft = `${days} days, ${hours} h, ${minutes} m, ${seconds} s`

      const titleElement = document.querySelector('h1')
      const timeLeftElement = document.querySelector('p')

      if (titleElement && timeLeftElement) {
        this.resizeText(titleElement as HTMLElement)
        this.resizeText(timeLeftElement as HTMLElement)
      }
    }, 1000)
  }

  updateCountdown() {
    localStorage.setItem('title', this.title)
    localStorage.setItem('targetDate', this.targetDate)
    this.startCountdown()
  }

  resizeText(element: HTMLElement) {
    let fontSize = parseInt(window.getComputedStyle(element).fontSize)

    while (element.scrollWidth > element.offsetWidth) {
      fontSize--
      element.style.fontSize = fontSize + 'px'
    }
  }
}
