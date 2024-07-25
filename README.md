# Image Downloader Script

This repository contains a Node.js script designed to download images from a CSV file. The images are saved with filenames generated from a random string and the `alt` text provided in the CSV.

## Overview

The script processes a CSV file containing image metadata and downloads the images to a randomly generated directory. The filenames for the images are composed of a random string and the `alt` text of the image. This approach helps avoid filename collisions and organizes the downloaded images.

## Features

- **CSV Reading**: Reads image URLs and `alt` text from a CSV file.
- **Image Downloading**: Downloads images from provided URLs.
- **Dynamic Filenames**: Saves images with filenames based on a random string and `alt` text.
- **Random Directory**: Creates a random directory in the system's temporary folder to store downloaded images.

## Requirements

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
