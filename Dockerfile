# Етап 1: Build з Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# ✅ Копіюємо тільки папку backend ВСЕРЕДИНУ поточної директорії /app
COPY backend /app

WORKDIR /app

# ✅ Білдимо звідси, бо тут pom.xml
RUN mvn clean package -DskipTests


# Етап 2: Runtime на JDK
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
